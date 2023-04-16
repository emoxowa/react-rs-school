import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import {
  setIsLoading,
  setIsNotFound,
  setCards,
  setFilteredCards,
  setFilteredCardsInitialized,
} from '../../reducers/searchResultsSlice';
import CardList from '../../components/CardList/CardList';
import './Home.css';
import { filterCards } from '../../utils/utils';
import { ICard } from '../../types';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useGetCardsQuery } from '../../utils/Api/Api';

function Home(): JSX.Element {
  const { isLoading, isNotFound, cards, filteredCards, filteredCardsInitialized } = useSelector(
    (state: RootState) => state.searchResults
  );
  const dispatch = useDispatch();
  const [displayedCards, setDisplayedCards] = useState(6);
  const searchText = useSelector((state: RootState) => state.searchText.value);
  const { data, error } = useGetCardsQuery();

  useEffect(() => {
    if (data) {
      const { meals } = data;
      dispatch(setCards(meals));
      if (!filteredCardsInitialized) {
        if (searchText) {
          const userQuery: string = searchText.toLowerCase().trim();
          const cardsList: ICard[] = filterCards(meals, userQuery);
          dispatch(setFilteredCards(cardsList));
        } else {
          dispatch(setFilteredCards(meals));
        }
        dispatch(setFilteredCardsInitialized(true));
      }
    }

    if (error) {
      console.error('Error fetching cards:', error);
    }
  }, [data, error, searchText, filteredCardsInitialized, dispatch]);

  function displayMore() {
    setDisplayedCards(displayedCards + 3);
  }

  function handleSearchSubmit(query: string): void {
    const userQuery: string = query.toLowerCase().trim();
    const cardsList: ICard[] = filterCards(cards, userQuery);
    dispatch(setIsNotFound(false));
    dispatch(setIsLoading(true));

    setTimeout(() => {
      if (cardsList.length === 0) {
        dispatch(setIsNotFound(true));
      }
      dispatch(setIsLoading(false));
      setDisplayedCards(6);
      dispatch(setFilteredCards(cardsList));
    }, 2000);
  }

  return (
    <main className="main">
      <section className="about-project">
        <h1 className="about-project__title">
          Discover a <span className="about-project__span">World of Tasty Recipes </span>
          for a Flavorful and Scrumptious Adventure!
        </h1>
        <h2 className="about-project__subtitle">
          For now, our site showcases recipes starting with the letter &apos;R&apos; – because our
          creator isn&apos;t ready to splurge on a premium API subscription just yet. Enjoy the
          &apos;R&apos;ecipes!
        </h2>
        <SearchBar handleSearchSubmit={handleSearchSubmit} />
      </section>
      <CardList
        isLoading={isLoading}
        cards={filteredCards}
        isNotFound={isNotFound}
        displayMore={displayMore}
        displayedCards={displayedCards}
      />
    </main>
  );
}

export default Home;
