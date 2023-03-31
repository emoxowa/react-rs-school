import './SearchError.css';
import { ISearchError } from '../../types';

function SearchError({ textError }: ISearchError): JSX.Element {
  return (
    <div className="search-error">
      <p className="search-error__text">{textError}</p>
    </div>
  );
}

export default SearchError;
