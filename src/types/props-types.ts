export type TProps = {
  children?: string;
  database?: TMusic;
  value?: TMusic | string;
};

export type TCardInfo = {
  title: string;
  info: string | number;
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
