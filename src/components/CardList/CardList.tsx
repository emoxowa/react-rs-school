import Card from '../Card/Card';
import './CardList.css';
import Preloader from '../Preloader/Preloader';
import { ICard, ICardList } from '../../types';
import SearchError from '../SearchError/SearchError';
import Popup from '../Popup/Popup';
import { useState } from 'react';

function CardList({
  cards,
  isLoading,
  isNotFound,
  displayMore,
  displayedCards,
}: ICardList): JSX.Element {
  const [selectedCard, setSelectedCard] = useState<ICard | null>(null);

  function openPopup(card: ICard) {
    setSelectedCard(card);
  }

  function closePopup() {
    setSelectedCard(null);
  }

  return (
    <section>
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && (
        <SearchError textError={"Oops! We couldn't find a match. Let's try again!"} />
      )}
      {!isLoading && !isNotFound && (
        <ul className="cards-list">
          {cards.slice(0, displayedCards).map((card) => (
            <Card key={card.idMeal} cardData={card} onCardClick={openPopup} />
          ))}
        </ul>
      )}
      {cards.length > displayedCards && !isLoading ? (
        <button type="button" className="card-list__button" onClick={displayMore}>
          More Recipes
        </button>
      ) : (
        ''
      )}
      {selectedCard && <Popup card={selectedCard} onClose={closePopup} />}
    </section>
  );
}

export default CardList;
