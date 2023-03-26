import React, { Component } from 'react';
import styles from './form.module.css';
import { CardInfo, FormProps, FormState } from '../../types';

class Form extends Component<FormProps, FormState, CardInfo> {
  inputsRefs: {
    nameInput: React.RefObject<HTMLInputElement>;
    recipeTitleInput: React.RefObject<HTMLInputElement>;
    dateInput: React.RefObject<HTMLInputElement>;
    descriptionTextArea: React.RefObject<HTMLTextAreaElement>;
    categorySelect: React.RefObject<HTMLSelectElement>;
    imageInput: React.RefObject<HTMLInputElement>;
    checkboxInput: React.RefObject<HTMLInputElement>;
    radioInput: React.RefObject<HTMLInputElement>;
  };

  constructor(props: FormProps) {
    super(props);
    this.inputsRefs = {
      nameInput: React.createRef<HTMLInputElement>(),
      recipeTitleInput: React.createRef<HTMLInputElement>(),
      dateInput: React.createRef<HTMLInputElement>(),
      descriptionTextArea: React.createRef<HTMLTextAreaElement>(),
      categorySelect: React.createRef<HTMLSelectElement>(),
      imageInput: React.createRef<HTMLInputElement>(),
      checkboxInput: React.createRef<HTMLInputElement>(),
      radioInput: React.createRef<HTMLInputElement>(),
    };
    this.state = {
      submitMessage: '',
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const {
      nameInput,
      recipeTitleInput,
      dateInput,
      descriptionTextArea,
      categorySelect,
      imageInput,
      checkboxInput,
      radioInput,
    } = this.inputsRefs;
    const cardInfo = this.collectStateInfo();
    const { setCardsInfo } = this.props;
    if (
      nameInput?.current &&
      recipeTitleInput?.current &&
      dateInput?.current &&
      descriptionTextArea?.current &&
      categorySelect?.current &&
      imageInput?.current &&
      checkboxInput?.current &&
      radioInput?.current
    ) {
      const submitMessage = `Thank you, ${nameInput.current.value}! Your submission has been successfully submitted to the submission submitter. It's time to submit to the fact that you're a submission superstar!`;
      try {
        setCardsInfo(cardInfo);
        this.setState({ submitMessage });
        console.log(radioInput);
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
      category: this.inputsRefs.categorySelect.current?.value || '',
      image: this.inputsRefs.imageInput.current?.files?.[0] || null,
      checkbox: this.inputsRefs.checkboxInput.current?.checked || false,
      radio: this.inputsRefs.radioInput.current?.value || '',
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

        <div className={styles['form__input-group']}>
          <label htmlFor="category" className={styles.form__label}>
            Category
          </label>
          <select id="category" ref={this.inputsRefs.categorySelect}>
            <option value="Breakfast">Breakfast</option>
            <option value="Soups">Soups</option>
            <option value="Salads">Salads</option>
            <option value="Pasta">Pasta</option>
            <option value="Pizza">Pizza</option>
            <option value="Seafood">Seafood</option>
            <option value="Desserts">Desserts</option>
            <option value="Drinks">Drinks</option>
          </select>
        </div>

        <div className={styles['form__input-group']}>
          <label htmlFor="image" className={styles.form__label}>
            Image
          </label>
          <input
            id="image"
            type="file"
            className={styles.form__input}
            ref={this.inputsRefs.imageInput}
            required
          />
        </div>

        <div className={styles['form__input-group']}>
          <label className={styles.form__label}>Does it contain gluten?</label>
          <div>
            <label htmlFor="radio-yes" className={styles.form__label}>
              <input
                checked
                value="Yes"
                id="radio-yes"
                type="radio"
                name="option"
                className={styles.form__input}
                ref={this.inputsRefs.radioInput}
              />
              Yes
            </label>
            <label htmlFor="radio-no" className={styles.form__label}>
              <input
                value="No"
                id="radio-no"
                type="radio"
                name="option"
                className={styles.form__input}
                ref={this.inputsRefs.radioInput}
              />
              No
            </label>
          </div>
        </div>

        <div className={styles['form__input-group']}>
          <label htmlFor="checkbox" className={styles.form__label}>
            Make my name visible
          </label>
          <input
            id="checkbox"
            type="checkbox"
            className={styles.form__input}
            ref={this.inputsRefs.checkboxInput}
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
