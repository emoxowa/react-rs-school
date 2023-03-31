import React from 'react';
import './SearchError.css';

interface Props {
  textError: string;
}

function SearchError({ textError }: Props): JSX.Element {
  return (
    <div className="search-error">
      <p className="search-error__text">{textError}</p>
    </div>
  );
}

export default SearchError;
