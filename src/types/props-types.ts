export type TProps = {
  children?: string;
  database?: TMusic;
  value?: TMusic | string;
};

export type TCardInfo = {
  title: string;
  info: string | number | boolean | JSX.Element;
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
  radioCurrent: string;
  radio: string[];
  firstName: string;
  firstNameList: string[];
  lastName: string;
  lastNameList: string[];
  dateOfDelivery: string;
  emailNotification: boolean;
  paymentMethod: string;
  imageList: string[];
  cardsCount: number;
};

export type TFormCard = {
  number: number;
  logo: string[];
  radio: string[];
  firstName: string[];
  lastName: string[];
  date: string;
  postService: string;
  notification: JSX.Element;
};
