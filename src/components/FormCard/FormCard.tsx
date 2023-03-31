import '../Card/Card.css';
import like from '../../assets/like.svg';
import { IFormCard } from '../../types';
import gluten from '../../assets/gluten-free.png';
import defaultImage from '../../assets/defaultImage.png';

function FormCard({
  image,
  recipeTitle,
  userName,
  description,
  date,
  category,
  checkbox,
  radio,
}: IFormCard): JSX.Element {
  return (
    <div className="card">
      <img
        className="card__image"
        src={image ? URL.createObjectURL(image) : defaultImage}
        alt="Featured meal image"
      />
      <div className="card__content">
        <div className="card__category-list">
          <span className="card__category">{category}</span>
          {radio == 'No' ? <img src={gluten} className="card__gluten" /> : ''}
        </div>
        <h3 className="card__title">{recipeTitle}</h3>
        <h4 className="card__subtitle">{`author: ${checkbox ? userName : ' --- '}`}</h4>
        <p className="card__description">{description}</p>
        <div className="card__footer">
          <div className="card__rating-container">
            <button className="card__button">
              <img className="card__icon" src={like} alt="like" />
            </button>
            <p className="rating__number">0</p>
          </div>
          <div className="card__date">{date}</div>
        </div>
      </div>
    </div>
  );
}

export default FormCard;
