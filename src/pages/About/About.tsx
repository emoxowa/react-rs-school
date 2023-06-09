import styles from './About.module.css';
import img1 from '../../assets/food1.png';
import img2 from '../../assets/food2.png';

function About(): JSX.Element {
  return (
    <main className={styles['main']}>
      <div className={styles['about__content']}>
        <h1 className={styles['about__title']}>ABOUT</h1>
        <p className={styles['about__text']}>
          We believe that healthy eating doesn&apos;t have to be boring or bland, and that&apos;s
          why we&apos;ve created recipes that are both nutritious and delicious. From hearty soups
          and stews to fresh salads and smoothie bowls, our recipes are designed to help you achieve
          your health goals without sacrificing on taste.
        </p>
        <p className={styles['about__text']}>
          Whether you&apos;re looking for vegetarian, vegan, gluten-free or low-carb options, we
          have a recipe for you. Our website features an extensive range of recipes for breakfast,
          lunch, dinner and snacks, as well as recipes for special occasions such as holidays,
          parties and gatherings.
        </p>
        <p className={styles['about__text']}>
          So come and explore our website, and discover the many wholesome delights that await you!
        </p>
        <div className={styles['about__container']}>
          <button className={styles['about__button']}>
            <p className={styles['about__arrow']}>&larr;</p>
          </button>
          <img src={img1} alt="food" className={styles['about__image']} />
          <img src={img2} alt="food" className={styles['about__image']} />
          <button className={styles['about__button']}>
            <p className={styles['about__arrow']}>&rarr;</p>
          </button>
        </div>
      </div>
    </main>
  );
}

export default About;
