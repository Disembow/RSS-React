import React, { useEffect, useRef } from 'react';
import { TInput } from '../../../../types/props-types';
import Cards from './Cards';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import { fetchAlbums, submitSearch } from './searchBarSlice';
import Pagination from './Pagination';

export default function SearchBar(props: TInput) {
  const input = useAppSelector((state) => state.albums.input);
  const albums = useAppSelector((state) => state.albums.albums);
  const currentPage = useAppSelector((state) => state.albums.currentPage);
  const albumsPerPage = useAppSelector((state) => state.albums.albumsPerPage);
  const isLoading = useAppSelector((state) => state.albums.isLoading);
  const error = useAppSelector((state) => state.albums.error);
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    dispatch(fetchAlbums([input, currentPage, albumsPerPage]));
  }, [dispatch, input, currentPage, albumsPerPage]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (inputRef.current) dispatch(submitSearch(inputRef.current.value));
  };

  return (
    <>
      <form className="search light-block" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type={props.type}
          placeholder={props.placeholder}
          data-testid={props['data-testid']}
          ref={inputRef}
          defaultValue={input}
        />
        <button type="submit" className="search__icon" data-testid="main-search-icon"></button>
      </form>
      <Pagination />
      <Cards albums={albums} isLoading={isLoading} error={error} />
    </>
  );
}
