import React, { useState } from 'react';
import './Cards.scss';
import { TAlbums } from '../../../../types/props-types';
import DataLoaderImitation from './DataLoaderImitation';
import Popup from './Popup';
import Card from './Card';
import { API_CATALOG, API_LINK } from '../../../utils/data';

type TCards = {
  albums: TAlbums[];
  isLoading: boolean;
  error: string | null;
};

export default function Cards({ albums, isLoading, error }: TCards) {
  const [active, setActive] = useState(false);
  const [card, setCard] = useState<JSX.Element>();

  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const id = e.currentTarget.id;

    fetch(`${API_LINK + API_CATALOG}/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Couldn't fetch the data from that source");
        }
        return res.json();
      })
      .then((data: TAlbums) => {
        setCard(<Card data={data} clickHandler={clickHandler} />);
        setActive(true);
      });
  };

  return (
    <div className="cards__wrapper" data-testid="main-cards-list">
      {error && <div className="error__message_fetch">{error}</div>}
      {isLoading && <DataLoaderImitation />}
      {active && card && <Popup setActive={setActive}>{card}</Popup>}
      {albums.length > 0 ? (
        albums.map((e) => {
          return <Card key={e.id} data={e} clickHandler={clickHandler} />;
        })
      ) : (
        <div className="error__message_fetch">{'No result found'}</div>
      )}
    </div>
  );
}
