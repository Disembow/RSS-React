import React, { createRef, FormEvent, RefObject } from 'react';
import { TProps, TState } from '../../../types/props-types';
import Select from './UI/Select';
import imageDefault from '../../../assets/image_default.webp';
import checkmarkTrue from '../../../assets/checkbox-checked.svg';
import checkmarkFalse from '../../../assets/checkbox.svg';
import Button from './UI/Button';
import Input from './UI/Input';
import CardsForm from './UI/CardsForm';
import CreateSumbitMessage from './UI/SubmitMessage';

export default class Form extends React.Component {
  form: RefObject<HTMLFormElement>;
  radio1: RefObject<HTMLInputElement>;
  radio2: RefObject<HTMLInputElement>;
  inputName: RefObject<HTMLInputElement>;
  inputSecName: RefObject<HTMLInputElement>;
  inputDate: RefObject<HTMLInputElement>;
  selector: RefObject<HTMLSelectElement>;
  checkbox: RefObject<HTMLInputElement>;
  imageInput: RefObject<HTMLInputElement>;
  imagePreview: RefObject<HTMLImageElement>;
  submitPopup: RefObject<HTMLDivElement>;
  defaultDeliveryDate: string;
  defaultPostProvider: string;
  PostProviders: string[];
  withNotification: JSX.Element;
  withoutNotification: JSX.Element;

  state: TState;

  constructor(props: TProps) {
    super(props);
    this.handleImages = this.handleImages.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.form = createRef();
    this.radio1 = createRef();
    this.radio2 = createRef();
    this.inputName = createRef();
    this.inputSecName = createRef();
    this.inputDate = createRef();
    this.selector = createRef();
    this.checkbox = createRef();
    this.imageInput = createRef();
    this.imagePreview = createRef();
    this.submitPopup = createRef();
    this.defaultDeliveryDate = new Date().toISOString().slice(0, 10);
    this.defaultPostProvider = 'DHL';
    this.PostProviders = ['DHL', 'UPS', 'DPD'];
    this.withNotification = <img src={checkmarkFalse} alt="not checked" width="20" />;
    this.withoutNotification = <img src={checkmarkTrue} alt="checked" width="20" />;

    this.state = {
      cardsCount: 0,
      radioCurrent: '',
      radio: [],
      firstName: '',
      firstNameList: [],
      lastName: '',
      lastNameList: [],
      image: '',
      imageList: [],
      delivery: '',
      deliveryList: [],
      notification: <></>,
      notificationList: [],
      postProvider: '',
      postProviderList: [],
    };
  }

  radioCurrState() {
    if (this.radio1.current?.checked) {
      return this.radio1.current.value;
    } else if (this.radio2.current?.checked) {
      return this.radio2.current.value;
    }
    return '';
  }

  handleSubmit(e: FormEvent) {
    e.preventDefault();

    this.setState(() => {
      const radio = [...this.state.radio, this.radioCurrState()];
      const firstNameList = [...this.state.firstNameList, this.inputName.current?.value];
      const lastNameList = [...this.state.lastNameList, this.inputSecName.current?.value];
      const imageList = [...this.state.imageList, this.state.image];
      const notificationList = [
        ...this.state.notificationList,
        this.checkbox.current?.checked ? this.withoutNotification : this.withNotification,
      ];
      const deliveryList = [...this.state.deliveryList, this.inputDate.current?.value];
      const postProviderList = [...this.state.postProviderList, this.selector.current?.value];

      return {
        cardsCount: this.state.cardsCount + 1,
        radio,
        firstNameList,
        lastNameList,
        imageList,
        notificationList,
        deliveryList,
        postProviderList,
      };
    });

    setTimeout(() => {
      this.submitPopup.current?.remove();
      if (this.form.current && this.imagePreview.current) {
        this.form.current.reset();
        this.imagePreview.current.src = imageDefault;
      }
    }, 3000);
  }

  handleImages() {
    if (this.imageInput.current?.files) {
      const file = this.imageInput.current?.files[0];
      const reader = new FileReader();

      if (file instanceof File) {
        reader.readAsDataURL(file);

        reader.onload = () => {
          const image = reader.result;
          if (this.imagePreview.current && typeof image === 'string') {
            this.imagePreview.current.src = image;
            this.setState({ image: image });
          }
        };

        reader.onerror = () => {
          console.log(reader.error);
        };
      }
    }
  }

  render() {
    return (
      <>
        <form className="order__form" onSubmit={this.handleSubmit} ref={this.form}>
          <div className="form__item form__item_radio">
            <Input
              labelText="How to address you:"
              className="form__checkbox"
              type="radio"
              reference={this.radio1}
              value="Mr."
              name="gender"
              id="gender"
            />
            <Input
              labelText=""
              className="form__checkbox"
              type="radio"
              reference={this.radio2}
              value="Ms."
              name="gender"
              id="gender"
            />
          </div>

          <div className="form__item">
            <Input
              labelText="First name:"
              className="light-block"
              type="text"
              reference={this.inputName}
              placeholder="Enter your first name"
              autoComplete="off"
              name="first-name"
              id="first-name"
              required
            />
          </div>

          <div className="form__item">
            <Input
              labelText="Last name:"
              className="light-block"
              type="text"
              reference={this.inputSecName}
              placeholder="Enter your last name"
              autoComplete="off"
              name="last-name"
              id="last-name"
              required
            />
          </div>

          <div className="form__item">
            <Input
              labelText="Delivery date:"
              className="light-block"
              type="date"
              reference={this.inputDate}
              placeholder="Enter your last name"
              autoComplete="off"
              name="delivery-date"
              id="delivery-date"
              min={new Date().toISOString().slice(0, 10)}
              max={`${new Date().getFullYear() + 1}${new Date().toISOString().slice(4, 10)}`}
              defaultValue={this.defaultDeliveryDate}
              required
            />
          </div>

          <div className="form__item">
            <Select
              labelText="Post service:"
              value={this.PostProviders}
              className={'light-block'}
              name="post-select"
              id="post-select"
              reference={this.selector}
            />
          </div>

          <div className="form__item">
            <Input
              labelText="Email notifications:"
              className="form__checkbox"
              type="checkbox"
              reference={this.checkbox}
              name="data-agree-box"
              id="data-agree-box"
            />
          </div>

          <div className="form__item">
            <label className="form__label" htmlFor="avatar">
              Upload your image:
            </label>
            <input
              className="input__file"
              type="file"
              name="avatar"
              id="avatar"
              data-testid="avatar"
              ref={this.imageInput}
              onChange={this.handleImages}
              required
            />
          </div>

          <div className="image-preview__wrapper">
            <img
              className="image-preview__item"
              src={imageDefault}
              ref={this.imagePreview}
              alt="input file preview"
            />
          </div>

          <Button>Submit</Button>
        </form>

        <CardsForm
          number={this.state.cardsCount}
          logo={this.state.imageList}
          radio={this.state.radio}
          firstName={this.state.firstNameList}
          lastName={this.state.lastNameList}
          date={this.state.deliveryList}
          postService={this.state.postProviderList}
          notification={this.state.notificationList}
        >
          {<CreateSumbitMessage reference={this.submitPopup} />}
        </CardsForm>
      </>
    );
  }
}
