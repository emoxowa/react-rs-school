import { useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import './Home.css';
import { filterCards } from '../../utils/utils';
import { ICard } from '../../types';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getCards } from '../../utils/Api/Api';

function Home(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [cards, setCards] = useState<ICard[]>([]);
  const [filteredCards, setFilteredCards] = useState<ICard[]>([]);
  const [displayedCards, setDdisplayedCards]: [number, (newValue: number) => void] = useState(6);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { meals } = await getCards();
        setCards(meals);

        const savedValue = localStorage.getItem('searchBarInputValue');
        if (savedValue) {
          const userQuery: string = savedValue.toLowerCase().trim();
          const cardsList: ICard[] = filterCards(meals, userQuery);
          setFilteredCards(cardsList);
        } else {
          setFilteredCards(meals);
        }
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

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
