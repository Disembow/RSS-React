import React, { createRef, FormEvent, RefObject } from 'react';
import { TProps } from '../../../types/props-types';
import Option from './Option';
import imageDefault from '../../../assets/image_default.webp';

type TState = {
  [key: string]: string | boolean;
};
export default class Input extends React.Component {
  inputName: RefObject<HTMLInputElement>;
  inputSecName: RefObject<HTMLInputElement>;
  inputDate: RefObject<HTMLInputElement>;
  selector: RefObject<HTMLSelectElement>;
  checkbox: RefObject<HTMLInputElement>;
  imageInput: RefObject<HTMLInputElement>;
  imagePreview: RefObject<HTMLImageElement>;
  defaultDeliveryDate: string;

  state: TState;

  constructor(props: TProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleImages = this.handleImages.bind(this);

    this.inputName = createRef();
    this.inputSecName = createRef();
    this.inputDate = createRef();
    this.selector = createRef();
    this.checkbox = createRef();
    this.imageInput = createRef();
    this.imagePreview = createRef();
    this.defaultDeliveryDate = new Date().toISOString().slice(0, 10);

    this.state = {
      firstName: '',
      lastName: '',
      dateOfDelivery: '',
      postService: '',
      emailNotification: false,
      paymentMethod: '',
      radio: '',
      imagePreviewLink: '',
    };
  }

  handleDataChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log(e.target.value);
  }

  handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let status: boolean = e.target.checked;
    status ? (status = false) : (status = true);
  };

  handleRadio(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ radio: e.target.value });
  }

  handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.group('On form submit');
    console.log('First name: ' + this.inputName.current?.value);
    console.log('Last name: ' + this.inputSecName.current?.value);
    console.log('Date of delivery: ' + this.inputDate.current?.value);
    console.log('Post service: ' + this.selector.current?.value.toUpperCase());
    console.log('Checkbox: ' + this.checkbox.current?.checked);
    console.log('Sex: ' + this.state.radio);
    console.log('Image: ' + this.imagePreview.current?.alt);
    console.groupEnd();
  }

  render() {
    return (
      <form className="order__form" onSubmit={this.handleSubmit}>
        <div className="form__item">
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

        <div className="form__item">
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
          <select className="light-block" ref={this.selector} name="post-select">
            <Option value="dhl">DHL</Option>
            <Option value="ups">UPS</Option>
            <Option value="dpd">DPD</Option>
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

        <div className="form__item form__item_radio" onChange={this.handleRadio}>
          <input className="form__checkbox" type="radio" value="Male" name="gender" /> Male
          <input className="form__checkbox" type="radio" value="Female" name="gender" /> Female
          <input className="form__checkbox" type="radio" value="Other" name="gender" /> Other
        </div>

        <div className="form__item">
          <label className="form__label" htmlFor="avatar">
            Upload your image:
          </label>
          <input type="file" name="avatar" ref={this.imageInput} onChange={this.handleImages} />
        </div>

        <div className="image-preview__wrapper">
          <img
            className="image-preview__item"
            src={imageDefault}
            ref={this.imagePreview}
            alt="input file preview"
          />
        </div>

        <button className="button button__submit" type="submit">
          Submit
        </button>
      </form>
    );
  }

  handleImages(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const file = e.target.files?.[0];
    const reader = new FileReader();

    if (file instanceof File) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        if (this.imagePreview.current) {
          this.imagePreview.current.src = reader.result as string;
          this.setState({ imagePreviewLink: reader.result });
        }
      };

      reader.onerror = () => {
        console.log(reader.error);
      };
    }
  }
}
