import React, { useState } from 'react';
import './Form.css';
import { FormProps, IFormValues } from '../../types';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { startsWithUppercase } from '../../utils/utils';
import InputText from './InputText/InputText';
import InputDate from './InputDate/InputDate';
import InputTextarea from './InputTextArea/InputTextArea';
import InputSelect from './InputSelect/InputSelect';
import InputFile from './InputFile/InputFile';
import InputRadio from './InputRadio/InputRadio';
import InputCheckbox from './InputCheckbox/InputCheckbox';

const Form: React.FC<FormProps> = ({ setCardsInfo }) => {
  const [successMessage, setSuccessMessage] = useState('');

  const methods = useForm<IFormValues>();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = methods;

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
    setCardsInfo(data as IFormValues);
    reset();
    setSuccessMessage(
      `Thank you, ${data['Your name']}! Your submission has been successfully submitted to the submission submitter. It's time to submit to the fact that you're a submission superstar!`
    );
  };

  return (
    <FormProvider {...methods}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label="Your name"
          register={(options) =>
            register('Your name', { ...options, validate: startsWithUppercase })
          }
          required
          error={
            errors['Your name'] &&
            (errors['Your name'].type === 'required'
              ? 'Name is required'
              : 'Name must start with an uppercase letter')
          }
        />
        <InputText
          label="Recipe title"
          register={(options) =>
            register('Recipe title', { ...options, validate: startsWithUppercase })
          }
          required
          error={
            errors['Recipe title'] &&
            (errors['Recipe title'].type === 'required'
              ? 'Recipe title is required'
              : 'Recipe title must start with an uppercase letter')
          }
        />
        <InputDate
          label="Date of publication"
          register={(options) => register('Date of publication', options)}
          required
          error={errors['Date of publication'] && 'Date is required'}
        />

        <InputTextarea
          label="Description"
          register={(options) => register('Description', options)}
          required
          error={errors['Description'] && 'Description is required'}
        />

        <InputSelect
          label="Category"
          register={(options) => register('Category', options)}
          required
          error={errors['Category'] && 'Category is required'}
        />

        <InputFile
          label="Image"
          name="Image"
          required
          error={errors['Image'] && 'Image is required'}
        />

        <InputRadio
          label="Contain gluten?"
          name="Contain gluten"
          register={register}
          required
          error={errors['Contain gluten'] && 'This option is required'}
        />

        <InputCheckbox
          label="Make my name visible"
          name="checkbox"
          register={register}
          error={errors.checkbox && 'An error occurred'}
        />

        <input className="form__button" type="submit" value="Submit" />
        <div className="form__message">{successMessage}</div>
      </form>
    </FormProvider>
  );
};

export default Form;
