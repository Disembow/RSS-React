import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import './Pagination.scss';
import { ALBUMS_PER_PAGE } from '../../../utils/data';
import { setCurrentPage } from './searchBarSlice';

const Pagination = () => {
  const dispatch = useAppDispatch();

  const numberOfPages = Math.ceil(
    useAppSelector((state) => state.albums.albumsCount) / ALBUMS_PER_PAGE
  );

  const pageNumbers: number[] = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  const clickHandler = (e: React.MouseEvent) => {
    dispatch(setCurrentPage(e.currentTarget.id.split('-')[1]));
  };

  return (
    <nav className="page-numbers__container">
      {pageNumbers.map((num) => (
        <div className="page-number" key={num} id={`page-${num.toString()}`} onClick={clickHandler}>
          {num}
        </div>
      ))}
    </nav>
  );
};

export default Pagination;
