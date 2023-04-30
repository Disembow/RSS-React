import React from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { setAlbumsPerPage } from './searchBarSlice';
import { ALBUMS_PER_PAGE } from '../../../utils/data';

const PaginationSelect = () => {
  const dispatch = useAppDispatch();

  return (
    <select
      name="items-per-page"
      id="items-per-page"
      className="items-per-page"
      onChange={(e) => dispatch(setAlbumsPerPage(e.target.value))}
      defaultValue={ALBUMS_PER_PAGE}
    >
      <option value="4">4</option>
      <option value="8">8</option>
      <option value="12">12</option>
      <option value="16">16</option>
      <option value="20">20</option>
    </select>
  );
};

export default PaginationSelect;
