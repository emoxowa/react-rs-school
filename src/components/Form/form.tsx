import React, { Component } from 'react';
import styles from './form.module.css';
import { CardInfo, FormProps, FormState } from '../../types';

class Form extends Component<FormProps, FormState, CardInfo> {
  inputsRefs: {
    nameInput: React.RefObject<HTMLInputElement>;
    recipeTitleInput: React.RefObject<HTMLInputElement>;
    dateInput: React.RefObject<HTMLInputElement>;
    descriptionTextArea: React.RefObject<HTMLTextAreaElement>;
  };

  constructor(props: FormProps) {
    super(props);
    this.inputsRefs = {
      nameInput: React.createRef<HTMLInputElement>(),
      recipeTitleInput: React.createRef<HTMLInputElement>(),
      dateInput: React.createRef<HTMLInputElement>(),
      descriptionTextArea: React.createRef<HTMLTextAreaElement>(),
    };
    this.state = {
      submitMessage: '',
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { nameInput, recipeTitleInput, dateInput, descriptionTextArea } = this.inputsRefs;
    const cardInfo = this.collectStateInfo();
    const { setCardsInfo } = this.props;
    if (
      nameInput?.current &&
      recipeTitleInput?.current &&
      dateInput?.current &&
      descriptionTextArea?.current
    ) {
      const submitMessage = `Thank you, ${nameInput.current.value}! Your submission has been successfully submitted to the submission submitter. It's time to submit to the fact that you're a submission superstar!`;
      try {
        setCardsInfo(cardInfo);
        this.setState({ submitMessage });
        event.currentTarget.reset();
      } catch (error) {
        console.error('Failed to update state:', error);
      }
    }
  };

  collectStateInfo = () => {
    const cardInfo = {
      userName: this.inputsRefs.nameInput.current?.value || '',
      recipeTitle: this.inputsRefs.recipeTitleInput.current?.value || '',
      date: this.inputsRefs.dateInput.current?.value || '',
      description: this.inputsRefs.descriptionTextArea.current?.value || '',
    };
    return cardInfo;
  };

  render(): JSX.Element {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div className={styles['form__input-group']}>
          <label htmlFor="nameInput" className={styles.form__label}>
            Your name
          </label>
          <input
            id="nameInput"
            type="text"
            className={styles.form__input}
            ref={this.inputsRefs.nameInput}
            required
          />
        </div>

        <div className={styles['form__input-group']}>
          <label htmlFor="recipe-title" className={styles.form__label}>
            Recipe title
          </label>
          <input
            id="recipe-title"
            type="text"
            className={styles.form__input}
            ref={this.inputsRefs.recipeTitleInput}
            required
          />
        </div>

        <div className={styles['form__input-group']}>
          <label htmlFor="date" className={styles.form__label}>
            Date of publication
          </label>
          <input
            id="date"
            type="date"
            className={styles.form__input}
            ref={this.inputsRefs.dateInput}
            required
          />
        </div>

        <div className={styles['form__input-group']}>
          <label htmlFor="description" className={styles.form__label}>
            Description
          </label>
          <textarea
            id="description"
            className={styles.form__input}
            ref={this.inputsRefs.descriptionTextArea}
            rows={10}
            required
          />
        </div>

        <button type="submit" className={styles.form__button}>
          Submit
        </button>
        <div className={styles.form__message}>{this.state.submitMessage}</div>
      </form>
    );
  }
}

export default Form;
