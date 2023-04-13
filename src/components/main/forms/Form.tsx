import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Options from './UI/Options';
import CardsForm from './UI/CardsForm';
import CreateSumbitMessage from './UI/SubmitMessage';
import Button from './UI/Button';
import { TForm } from '../../../types/props-types';
import Input from './UI/Input';
import Radio from './UI/Radio';
import { defaultDeliveryDate, maxDate } from '../../utils/data';
import { PostServices } from '../../../types/enums';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { changeVisibility } from './formSlice';

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TForm>({
    mode: 'onChange',
    defaultValues: {
      radio: '',
      firstName: '',
      lastName: '',
      deliveryDate: defaultDeliveryDate,
      postProvider: PostServices.DHL,
      checkbox: false,
    },
  });

  const [cardImageList, setСardImageList] = useState<string[]>([]);
  const [card, setCard] = useState<TForm[]>([]);
  const visible = useAppSelector((state) => state.visible.visible);
  const dispatch = useAppDispatch();

  const onSubmit = (data: TForm) => {
    const file = data.avatar[0];
    const reader = new FileReader();

    if (file instanceof File) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        const image = reader.result;
        if (typeof image === 'string') {
          const newState = [...cardImageList, image];
          setСardImageList(newState);
        }
      };
    }

    setCard([...card, data]);
    dispatch(changeVisibility());

    reset();
  };

  const clickHandler = function () {
    dispatch(changeVisibility());
  };

  const title = register('radio');

  const firstname = register('firstName', {
    required: 'This is required field',
    minLength: { value: 2, message: 'It needs min 2 characters' },
    pattern: {
      value: /^[A-Z][a-z]{1,20}$/,
      message: 'Only first character needs to be capitalized',
    },
  });

  const lastname = register('lastName', {
    required: 'This is required field',
    minLength: { value: 2, message: 'It needs min 2 characters' },
    pattern: {
      value: /^[A-Z][a-z]{1,20}$/,
      message: 'Only first character needs to be capitalized',
    },
  });

  const deliveryDate = register('deliveryDate', { required: true });

  const checkbox = register('checkbox');

  const avatar = register('avatar', {
    required: 'Please insert an image file',
    validate: {
      notEmpty: (e) => e.length > 0 || 'Please add the file',
    },
  });

  return (
    <>
      <form className="order__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__item form__item_radio">
          <label className="form__label" htmlFor={'first-name'}>
            How to address you:
          </label>
          <Radio register={title} className="form__checkbox" type="radio" value="Mr." id="gender" />
          <Radio register={title} className="form__checkbox" type="radio" value="Ms." id="gender" />
          <Radio register={title} className="form__checkbox" type="radio" value="" id="gender" />
        </div>

        <Input
          register={firstname}
          className={'light-block'}
          type={'text'}
          placeholder={'Enter your first name'}
          autoComplete={'off'}
          id={'first-name'}
          labelText={'First name:'}
        />
        <p className="error__message">{errors.firstName?.message}</p>

        <Input
          register={lastname}
          className={'light-block'}
          type={'text'}
          placeholder={'Enter your last name'}
          autoComplete={'off'}
          id={'last-name'}
          labelText={'Last name:'}
        />
        <p className="error__message">{errors.lastName?.message}</p>

        <Input
          register={deliveryDate}
          className={'light-block'}
          type={'date'}
          autoComplete={'off'}
          id={'delivery-date'}
          min={defaultDeliveryDate}
          max={maxDate.toISOString().slice(0, 10)}
          labelText={'Delivery date:'}
        />

        <div className="form__item">
          <label className="form__label" htmlFor="post-select">
            Post service:
          </label>
          <select {...register('postProvider')} className="light-block" id="post-select">
            <Options value={[PostServices.DHL, PostServices.UPS, PostServices.DPD]} />
          </select>
        </div>

        <Input
          register={checkbox}
          className={'form__checkbox'}
          type={'checkbox'}
          id={'checkbox'}
          labelText={'Email notifications:'}
        />

        <Input
          register={avatar}
          className={'input__file'}
          type={'file'}
          id={'avatar'}
          title={'avatar'}
          accept={'.jpg, .jpeg, .png, .gif, .bmp, .webp, .svg'}
          labelText={'Upload your image:'}
        />
        {errors.avatar ? <p className="error__message">{errors.avatar.message}</p> : <></>}

        <Button />
      </form>

      <CardsForm number={cardImageList.length} logo={cardImageList} data={card}>
        {visible ? <CreateSumbitMessage callback={clickHandler} /> : <></>}
      </CardsForm>
    </>
  );
}
