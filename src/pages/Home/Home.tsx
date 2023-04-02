import { useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import './Home.css';
import { filterCards } from '../../utils/utils';
import cards from '../../assets/data/db';
import { ICard } from '../../types';
import SearchBar from '../../components/SearchBar/SearchBar';

function Home(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [filteredCards, setFilteredCards] = useState(cards);
  const [displayedCards, setDdisplayedCards]: [number, (newValue: number) => void] = useState(6);

  function displayCountCards() {
    setDdisplayedCards(6);
  }

  function displayMore() {
    setDdisplayedCards(displayedCards + 3);
  }

  useEffect(() => {
    displayCountCards();
  }, []);

  function handleSearchSubmit(query: string): void {
    const userQuery: string = query.toLowerCase().trim();
    const cardsList: ICard[] = filterCards(cards, userQuery);
    setIsNotFound(false);
    setIsLoading(true);
    setTimeout(() => {
      if (cardsList.length === 0) {
        setIsNotFound(true);
      }
      setIsLoading(false);
      setDdisplayedCards(6);
      setFilteredCards(cardsList);
    }, 2000);
  }

  return (
    <main className="main">
      <section className="about-project">
        <h1 className="about-project__title">
          Explore a <span className="about-project__span">World of Healthy Recipes</span> for a
          Nourishing and Delicious Experience!
        </h1>
        <h2 className="about-project__subtitle">
          We believe that healthy eating doesn&apos;t have to be boring or bland, and that&apos;s
          why we&apos;ve created recipes that are both nutritious and delicious.
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
