import { useState } from 'react';
import Form from '../../components/Form/form';
import styles from './Forms.module.css';
import { CardInfo } from '../../types';
import Card from '../../components/Card/Card';

function Forms() {
  const [cards, setCards] = useState<CardInfo[]>([]);

  const addCard = (cardInfo: CardInfo): void => {
    setCards((prevCards) => [...prevCards, cardInfo]);
  };

  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <h1 className={styles.forms__title}>
          Add your healthy recipe and become an author in our recipe book!
        </h1>
        <Form setCardsInfo={addCard} />
        <ul className={styles.cards}>
          {cards.map((card, index) => (
            <Card
              key={index}
              userName={card.userName}
              title={card.recipeTitle}
              date={card.date}
              description={card.description}
              category={card.category}
              image={card.image}
              checkbox={card.checkbox}
              radio={card.radio}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Forms;
