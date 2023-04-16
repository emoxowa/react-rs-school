import { useState } from 'react';
import './Forms.css';
import { IFormCard, IFormValues } from '../../types';
import FormCard from '../../components/FormCard/FormCard';
import Form from '../../components/Form/Form';

function Forms() {
  const [cards, setCards] = useState<IFormCard[]>([]);

  const addCard = (data: IFormValues): void => {
    const newCard = {
      userName: data['Your name'],
      recipeTitle: data['Recipe title'],
      date: data['Date of publication'],
      description: data.Description,
      category: data.Category,
      image: data.Image,
      checkbox: data.checkbox,
      radio: data['Contain gluten'],
    };
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <main className="main">
      <section className="wrapper">
        <h1 className="forms__title">
          Add your healthy recipe and become an author in our recipe book!
        </h1>
        <Form setCardsInfo={addCard} />
        <ul className="cards">
          {cards.map((card, index) => (
            <FormCard
              key={index}
              userName={card.userName}
              recipeTitle={card.recipeTitle}
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
