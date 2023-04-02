import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Options from './UI/Options';
import CardsForm from './UI/CardsForm';
import CreateSumbitMessage from './UI/SubmitMessage';

export type TNewForm = {
  firstName: string;
  lastName: string;
  radio: string;
  deliveryDate: string;
  postProvider: string;
  checkbox: boolean;
  avatar: FileList[];
};

const defaultDeliveryDate = new Date().toISOString().slice(0, 10);
const maxDate = new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate());

export default function NewForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors /*, isValid*/ },
  } = useForm<TNewForm>({
    mode: 'onChange',
    defaultValues: {
      radio: '',
      firstName: '',
      lastName: '',
      deliveryDate: defaultDeliveryDate,
      postProvider: 'DHL',
      checkbox: false,
    },
  });

  const [cardImageList, setcardImageList] = useState<string[]>([]);
  const [card, setCard] = useState<TNewForm[]>([]);

  const onSubmit = (data: TNewForm) => {
    const file = data.avatar[0];
    const reader = new FileReader();

    if (file instanceof File) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        const image = reader.result;
        if (typeof image === 'string') {
          const newState = [...cardImageList, image];
          setcardImageList(newState);
        }
      };
    }

    setCard([...card, data]);

    setVisible((prev) => !prev);

    reset();
  };

  const [visible, setVisible] = useState(false);

  const clickHandler = function () {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <form className="order__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__item form__item_radio">
          <label className="form__label" htmlFor={'first-name'}>
            How to address you:
          </label>
          <input
            {...register('radio')}
            className="form__checkbox"
            type="radio"
            value="Mr."
            id="gender"
          />
          Mr.
          <input
            {...register('radio')}
            className="form__checkbox"
            type="radio"
            value="Ms."
            id="gender"
          />
          Ms.
          <input
            {...register('radio')}
            className="form__checkbox"
            type="radio"
            value=""
            id="gender"
          />
          Other
        </div>

        <div className="form__item">
          <label className="form__label" htmlFor={'first-name'}>
            First name:
          </label>
          <input
            {...register('firstName', {
              required: 'This is required field',
              minLength: { value: 2, message: 'It needs min 2 characters' },
              pattern: {
                value: /^[A-Z][a-z]{1,20}$/,
                message: 'Only first character needs to be capitalized',
              },
            })}
            className="light-block"
            type="text"
            placeholder="Enter your first name"
            autoComplete="off"
            id="first-name"
          />
        </div>
        <p className="error__message">{errors.firstName?.message}</p>

        <div className="form__item">
          <label className="form__label" htmlFor={'last-name'}>
            Last name:
          </label>
          <input
            {...register('lastName', {
              required: 'This is required field',
              minLength: { value: 2, message: 'It needs min 2 characters' },
              pattern: {
                value: /^[A-Z][a-z]{1,20}$/,
                message: 'Only first character needs to be capitalized',
              },
            })}
            className="light-block"
            type="text"
            placeholder="Enter your last name"
            autoComplete="off"
            id="last-name"
          />
        </div>
        <p className="error__message">{errors.lastName?.message}</p>

        <div className="form__item">
          <label className="form__label" htmlFor={'delivery-date'}>
            Delivery date:
          </label>
          <input
            {...register('deliveryDate', { required: true })}
            className="light-block"
            type="date"
            placeholder="Enter your last name"
            autoComplete="off"
            id="delivery-date"
            min={defaultDeliveryDate}
            max={maxDate.toISOString().slice(0, 10)}
          />
        </div>

        <div className="form__item">
          <label className="form__label" htmlFor="post-select">
            Post service:
          </label>
          <select {...register('postProvider')} className="light-block" id="post-select">
            <Options value={['DHL', 'UPS', 'DPD']} />
          </select>
        </div>

        <div className="form__item">
          <label className="form__label" htmlFor="checkbox">
            Email notifications:
          </label>
          <input
            {...register('checkbox')}
            className="form__checkbox"
            type="checkbox"
            id="checkbox"
          />
        </div>

        <div className="form__item">
          <label className="form__label" htmlFor="avatar">
            Upload your image:
          </label>
          <input
            {...register('avatar', {
              required: 'Please insert an image file',
              validate: {
                notEmpty: (e) => e.length > 0 || 'Please add the file',
                // fileType: (e) =>
                //   (e.length > 0 && e[0].type.startsWith('image')) || 'Must be an image type',
              },
            })}
            className="input__file"
            type="file"
            id="avatar"
            data-testid="avatar"
            onChange={(e) => console.log(e.target.files![0].type.startsWith('image'))}
          />
        </div>
        {errors.avatar ? <p className="error__message">{errors.avatar.message}</p> : <></>}

        <input
          className="button button__submit"
          type="submit"
          value={'Submit'}
          // disabled={!isValid}
        />
      </form>

      <CardsForm number={cardImageList.length} logo={cardImageList} data={card}>
        {visible ? <CreateSumbitMessage callback={clickHandler} /> : <></>}
      </CardsForm>
    </>
  );
}
