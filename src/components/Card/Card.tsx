import styles from './Card.module.css';
import image1 from '../../assets/image1.png';
import like from '../../assets/like.svg';

function Card() {
  return (
    <div className={styles.card}>
      <img className={styles['card__image']} src={image1} alt="" />
      <div className={styles['card__content']}>
        <h3 className={styles['card__title']}>Featured Meal</h3>
        <h4 className={styles['card__subtitle']}>Served with french fries + drink</h4>
        <p className={styles['card__description']}>
          Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender
          crisp patty and more...
        </p>
        <div className={styles['card__footer']}>
          <div>
            <button className={styles['card__button']}>
              <img className={styles['card__icon']} src={like} alt="like" />
            </button>
          </div>
          <p className="rating__number">12</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
