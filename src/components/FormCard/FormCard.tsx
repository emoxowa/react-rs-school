import styles from '../Card/Card.module.css';
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
    <div className={styles.card}>
      <img
        className={styles['card__image']}
        src={image ? URL.createObjectURL(image) : defaultImage}
        alt="Featured meal image"
      />
      <div className={styles['card__content']}>
        <div className={styles['card__category-list']}>
          <span className={styles['card__category']}>{category}</span>
          {radio == 'No' ? <img src={gluten} className={styles['card__gluten']} /> : ''}
        </div>
        <h3 className={styles['card__title']}>{recipeTitle}</h3>
        <h4 className={styles['card__subtitle']}>{`author: ${checkbox ? userName : ' --- '}`}</h4>
        <p className={styles['card__description']}>{description}</p>
        <div className={styles['card__footer']}>
          <div className={styles['card__rating-container']}>
            <button className={styles['card__button']}>
              <img className={styles['card__icon']} src={like} alt="like" />
            </button>
            <p className="rating__number">0</p>
          </div>
          <div className={styles['card__date']}>{date}</div>
        </div>
      </div>
    </div>
  );
}

export default FormCard;
