import AboutProject from '../../components/AboutProject/AboutProject';
import Card from '../../components/Card/Card';
import styles from './Home.module.css';

function Home() {
  return (
    <main className={styles.main}>
      <AboutProject />
      <section className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}

export default Home;
