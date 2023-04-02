import { TForm } from '../components/main/forms/Form';

export type TProps = {
  children?: string;
  database?: TMusic;
  value?: TMusic | string;
  reference?: React.RefObject<HTMLDivElement>;
};

export type TCardInfo = {
  title: string;
  info: string | number | boolean | JSX.Element;
  'data-testid'?: string;
};

export type TMusic = {
  albums: TAlbums[];
};

type TAlbums = {
  id: number;
  artist: string;
  album: string;
  year: number;
  rating: number;
  genre: string;
  tracks: number;
  cover: string;
};

export type TState = {
  cardsCount: number;
  radioCurrent: string;
  radio: string[];
  firstName: string;
  firstNameList: string[];
  lastName: string;
  lastNameList: string[];
  image: string;
  imageList: string[];
  delivery: string;
  deliveryList: string[];
  notification: JSX.Element;
  notificationList: JSX.Element[];
  postProvider: string;
  postProviderList: string[];
};

export type TFormCard = {
  number?: number;
  logo?: string[];
  children?: JSX.Element;
  data: TForm[];
};

export type TOption = {
  labelText?: string;
  value: string[];
  name?: string;
  id?: string;
  'data-testid'?: string;
  className?: string;
  reference?: React.RefObject<HTMLSelectElement>;
};
