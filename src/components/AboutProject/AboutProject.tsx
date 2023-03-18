import SearchBar from '../SearchBar/SearchBar';
import styles from './AboutProject.module.css';

function AboutProject(): JSX.Element {
  return (
    <section className={styles['about-project']}>
      <h1 className={styles['about-project__title']}>
        Explore a <span className={styles['about-project__span']}>World of Healthy Recipes</span>{' '}
        for a Nourishing and Delicious Experience!
      </h1>
      <h2 className={styles['about-project__subtitle']}>
        We believe that healthy eating doesn&apos;t have to be boring or bland, and that&apos;s why
        we&apos;ve created recipes that are both nutritious and delicious.
      </h2>
      <SearchBar />
    </section>
  );
}

export default AboutProject;
