export type TProps = {
  children?: string;
  title?: string;
  info?: string | number;
  database?: TMusic;
  value?: TMusic;
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
