import React, { useState, useEffect, FormEvent } from 'react';
import './SearchBar.css';
import { ISearchBar } from '../../types';

function SearchBar({ handleSearchSubmit }: ISearchBar): JSX.Element {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const savedValue = localStorage.getItem('searchBarInputValue');
    if (savedValue) {
      setInputValue(savedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchBarInputValue', inputValue);
  }, [inputValue]);

  const handleInputChange = (event: FormEvent<HTMLInputElement>): void => {
    setInputValue(event.currentTarget.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('searchBarInputValue', inputValue);
    handleSearchSubmit(inputValue);
  };

  return (
    <div className="search-container">
      <form action="/search" className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search recipe"
          className="search__input"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <button type="submit" className="search__button"></button>
      </form>
    </div>
  );
}

export default SearchBar;
