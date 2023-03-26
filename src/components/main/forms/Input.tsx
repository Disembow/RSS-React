import React, { createRef, FormEvent, RefObject } from 'react';
import { TProps, TState } from '../../../types/props-types';
import Option from './Option';
import imageDefault from '../../../assets/image_default.webp';
import checkmarkTrue from '../../../assets/checkbox-checked.svg';
import checkmarkFalse from '../../../assets/checkbox.svg';
import Button from './Button';
import CardsForm from './CardsForm';
import CreateSumbitMessage from './SubmitMessage';

export default class Input extends React.Component {
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
  defaultNotification: JSX.Element;

  state: TState;

  constructor(props: TProps) {
    super(props);
    this.handleImages = this.handleImages.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSelector = this.handleSelector.bind(this);

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
    this.defaultNotification = <img src={checkmarkFalse} alt="not checked" width="20" />;

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
      notification: this.defaultNotification,
      notificationList: [],
      postProvider: '',
      postProviderList: [],
    };
  }

  handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Change cards state
    this.setState(() => {
      const radio = [...this.state.radio, this.state.radioCurrent];
      const firstNameList = [...this.state.firstNameList, this.state.firstName];
      const lastNameList = [...this.state.lastNameList, this.state.lastName];
      const imageList = [...this.state.imageList, this.state.image];
      const notificationList = [...this.state.notificationList, this.state.notification];
      const deliveryList = [
        ...this.state.deliveryList,
        this.state.delivery === '' ? this.defaultDeliveryDate : this.state.delivery,
      ];
      const postProviderList = [
        ...this.state.postProviderList,
        this.state.postProvider === '' ? this.defaultPostProvider : this.state.postProvider,
      ];

      // Deleting popup message
      setTimeout(() => this.submitPopup.current?.remove(), 3000);

      // Validation

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
  }

  handleRadio(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ radioCurrent: e.target.value });
  }

  handleFirstName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ firstName: e.target.value });
  }

  handleLastName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ lastName: e.target.value });
  }

  handleImages(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const file = e.target.files?.[0];
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

  handleDataChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    this.setState({ delivery: e.target.value });
  }

  handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let status: boolean = e.target.checked;
    status ? (status = false) : (status = true);

    this.setState({
      notification:
        e.target.checked === true ? (
          <img src={checkmarkTrue} alt="checked" width="20" />
        ) : (
          <img src={checkmarkFalse} alt="not checked" width="20" />
        ),
    });
  };

  handleSelector(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ postProvider: e.target.value });
  }

  render() {
    return (
      <>
        <form className="order__form" onSubmit={this.handleSubmit}>
          <div className="form__item form__item_radio" onChange={this.handleRadio}>
            <label className="form__label">How to address you:</label>
            <input className="form__checkbox" type="radio" value="Mr." name="gender" /> Mr.
            <input className="form__checkbox" type="radio" value="Ms." name="gender" /> Ms.
          </div>
          <div className="form__item" onChange={this.handleFirstName}>
            <label className="form__label" htmlFor="first-name">
              First name:
            </label>
            <input
              className="light-block"
              type="text"
              ref={this.inputName}
              name="first-name"
              autoComplete="off"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="form__item" onChange={this.handleLastName}>
            <label className="form__label" htmlFor="last-name">
              Last name:
            </label>
            <input
              className="light-block"
              type="text"
              ref={this.inputSecName}
              name="last-name"
              autoComplete="off"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="delivery-date">
              Delivery date:
            </label>
            <input
              className="light-block"
              type="date"
              ref={this.inputDate}
              name="delivery-date"
              min={new Date().toISOString().slice(0, 10)}
              max={`${new Date().getFullYear() + 1}${new Date().toISOString().slice(4, 10)}`}
              defaultValue={this.defaultDeliveryDate}
              onChange={this.handleDataChange}
              required
            />
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="post-select">
              Post service:
            </label>
            <select
              className="light-block"
              ref={this.selector}
              name="post-select"
              onChange={this.handleSelector}
            >
              <Option value="DHL">DHL</Option>
              <Option value="UPS">UPS</Option>
              <Option value="DPD">DPD</Option>
            </select>
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="data-agree-box">
              Email notifications:
            </label>
            <input
              className="form__checkbox"
              onChange={this.handleCheckboxChange}
              type="checkbox"
              name="data-agree-box"
              ref={this.checkbox}
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
              ref={this.imageInput}
              onChange={this.handleImages}
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
