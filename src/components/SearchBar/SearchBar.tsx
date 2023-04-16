import React, { FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { setSearchText } from '../../reducers/searchTextSlice';
import './SearchBar.css';
import { ISearchBar } from '../../types';

function SearchBar({ handleSearchSubmit }: ISearchBar): JSX.Element {
  const searchText = useSelector((state: RootState) => state.searchText.value);
  const dispatch: AppDispatch = useDispatch();

  const handleInputChange = (event: FormEvent<HTMLInputElement>): void => {
    dispatch(setSearchText(event.currentTarget.value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearchSubmit(searchText);
  };

  return (
    <div className="search-container">
      <form action="/search" className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search recipe"
          className="search__input"
          value={searchText}
          onChange={handleInputChange}
        ></input>
        <button type="submit" className="search__button"></button>
      </form>
    </div>
  );
}

export default SearchBar;
