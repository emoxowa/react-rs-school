import styles from './Card.module.css';
import like from '../../assets/like.svg';
import { CardProps } from '../../types';

function Card({ src, title, userName, description, date }: CardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <img className={styles['card__image']} src={src} alt="Featured meal image" />
      <div className={styles['card__content']}>
        <h3 className={styles['card__title']}>{title}</h3>
        <h4 className={styles['card__subtitle']}>{`author: ${userName}`}</h4>
        <p className={styles['card__description']}>{description}</p>
        <div className={styles['card__footer']}>
          <div className={styles['card__rating-container']}>
            <button className={styles['card__button']}>
              <img className={styles['card__icon']} src={like} alt="like" />
            </button>
            <p className="rating__number">12</p>
          </div>
          <div className={styles['card__date']}>{date}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
