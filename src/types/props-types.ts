import { TForm } from '../components/main/forms/Form';

export type TProps = {
  children?: string;
  database?: TMusic;
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

export type TImage = {
  src: string;
};
