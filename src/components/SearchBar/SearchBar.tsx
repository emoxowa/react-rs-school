import styles from './SearchBar.module.css';

function SearchBar(): JSX.Element {
  return (
    <div className={styles['search-container']}>
      <form action="/search" className={styles['search__form']}>
        <input type="text" placeholder="Search recipe" className={styles['search__input']}></input>
        <button type="submit" className={styles['search__button']}></button>
      </form>
    </div>
  );
}

export default SearchBar;
