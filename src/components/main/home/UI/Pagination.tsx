import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import './Pagination.scss';
import { setCurrentPage } from './searchBarSlice';
import PaginationSelect from './PaginationSelect';

const Pagination = () => {
  const dispatch = useAppDispatch();

  const albumsCount = useAppSelector((state) => state.albums.albumsCount);
  const albumsPerPage = useAppSelector((state) => state.albums.albumsPerPage);
  const currentPage = useAppSelector((state) => state.albums.currentPage);

  const numberOfPages = Math.ceil(albumsCount / albumsPerPage);

  const pageNumbers: number[] = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  const clickHandler = (e: React.MouseEvent) => {
    dispatch(setCurrentPage(e.currentTarget.id.split('-')[1]));
    console.log(+e.currentTarget.id.split('-')[1]);
  };

  return (
    <div className="pagination">
      <nav className="page-numbers__container">
        {pageNumbers.map((num) => (
          <div
            className={+currentPage === num ? 'page-number page-number__active' : 'page-number'}
            key={num}
            id={`page-${num.toString()}`}
            onClick={clickHandler}
          >
            {num}
          </div>
        ))}
      </nav>
      <PaginationSelect />
    </div>
  );
};

export default Pagination;
