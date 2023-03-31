import Card from '../Card/Card';
import './CardList.css';
import Preloader from '../Preloader/Preloader';
import { ICardList } from '../../types';
import SearchError from '../SearchError/SearchError';

function CardList({
  cards,
  isLoading,
  isNotFound,
  displayMore,
  displayedCards,
}: ICardList): JSX.Element {
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
      {cards.length > displayedCards && !isLoading ? (
        <button type="button" className="card-list__button" onClick={displayMore}>
          More Recipes
        </button>
      ) : (
        ''
      )}
    </section>
  );
}

export default CardList;
