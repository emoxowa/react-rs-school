import React, { Component, FormEvent } from 'react';
import styles from './SearchBar.module.css';
interface State {
  inputValue: string;
}

export class SearchBar extends Component<State> {
  state: State = {
    inputValue: '',
  };

  componentDidMount(): void {
    const savedValue = localStorage.getItem('searchBarInputValue');
    if (savedValue) {
      this.setState({ inputValue: savedValue });
    }
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchBarInputValue', this.state.inputValue);
  }

  handleInputChange = (event: FormEvent<HTMLInputElement>): void => {
    this.setState({ inputValue: event.currentTarget.value });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('searchBarInputValue', this.state.inputValue);
  };

  render(): JSX.Element {
    return (
      <div className={styles['search-container']}>
        <form action="/search" className={styles['search__form']} onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search recipe"
            className={styles['search__input']}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          ></input>
          <button type="submit" className={styles['search__button']}></button>
        </form>
      </div>
    );
  }
}
