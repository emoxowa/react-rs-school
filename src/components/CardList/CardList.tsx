import Card from '../Card/Card';
import './CardList.css';
import { useEffect, useState } from 'react';
import { DISPLAY } from '../../constants/constants';
import Preloader from '../Preloader/Preloader';
import { ICard } from '../../types';
import SearchError from '../SearchError/SearchError';

export interface ICardList {
  isLoading: boolean;
  isNotFound: boolean;
  cards: ICard[];
}

function CardList({ cards, isLoading, isNotFound }: ICardList): JSX.Element {
  const [displayedCards, setDdisplayedCards]: [number, (newValue: number) => void] = useState(0);

  function displayCountCards() {
    if (DISPLAY > 1135) {
      setDdisplayedCards(12);
    } else if (DISPLAY <= 1135) {
      setDdisplayedCards(3);
    } else if (DISPLAY <= 480) {
      setDdisplayedCards(2);
    }
  }

  useEffect(() => {
    displayCountCards();
  }, []);

  return (
    <section>
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && <SearchError textError={'Ничего не найдено'} />}
      {!isLoading && !isNotFound && (
        <ul className="cards-list">
          {cards.slice(0, displayedCards).map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              category={card.category}
              userName={card.userName}
              checkbox={card.checkbox}
              radio={card.radio}
              rating={card.rating}
              date={card.date}
              image={card.image}
            ></Card>
          ))}
        </ul>
      )}
    </section>
  );
}

export default CardList;
