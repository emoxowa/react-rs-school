import AboutProject from '../../components/AboutProject/AboutProject';
import Card from '../../components/Card/Card';
import styles from './Home.module.css';
import data from '../../assets/data/db';

function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <AboutProject />
      <section className={styles.cards}>
        {data.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            description={data.description}
            category={data.category}
            userName={data.userName}
            checkbox={data.checkbox}
            radio={data.radio}
            rating={data.rating}
            date={data.date}
            image={data.image}
          ></Card>
        ))}
      </section>
    </main>
  );
}

export default Home;
