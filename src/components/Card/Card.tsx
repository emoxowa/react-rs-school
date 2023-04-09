import './Card.css';
import like from '../../assets/like.svg';
import { ICard } from '../../types';
interface CardProps {
  cardData: ICard;
  onCardClick: (card: ICard) => void;
}

const Card: React.FC<CardProps> = ({ cardData, onCardClick }) => {
  function handleClick() {
    onCardClick(cardData);
  }

  return (
    <div className="card" onClick={handleClick}>
      <img className="card__image" src={cardData.strMealThumb} alt="Featured meal image" />
      <div className="card__content">
        <div className="card__category-list">
          <span className="card__category">{cardData.strCategory}</span>
        </div>
        <h3 className="card__title">{cardData.strMeal}</h3>
        <h4 className="card__subtitle">{`country: ${
          cardData.strArea == 'Unknown' ? '-' : cardData.strArea
        }`}</h4>
        <p className="card__description">{cardData.strInstructions}</p>
        <div className="card__footer">
          <div className="card__rating-container">
            <button className="card__button">
              <img className="card__icon" src={like} alt="like" />
            </button>
            <p className="rating__number">{Math.floor(Math.random() * 21)}</p>
          </div>
          <div className="card__date">09.04.2023</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
