import React, { useRef, useState } from 'react';
import './form.css';
import { FormProps } from '../../types';
import { useForm, SubmitHandler, Path, UseFormRegister } from 'react-hook-form';

interface IFormValues {
  'Your name': string;
  'Recipe title': string;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  error?: string;
};

const Input = ({ label, register, required, error }: InputProps) => (
  <div className="form__input-group">
    <label htmlFor="nameInput" className="form__label">
      {label}
    </label>
    <div className="form__input-wrapper">
      <input {...register(label, { required })} />
      <span className="error__text">{error}</span>
    </div>
  </div>
);

const Form: React.FC<FormProps> = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Your name"
        register={register}
        required
        error={errors['Your name'] && 'Name is required'}
      />
      <Input
        label="Recipe title"
        register={register}
        required
        error={errors['Recipe title'] && 'Recipe title is required'}
      />
      <input className="form__button" type="submit" />
      <div className="form__message">Jopa</div>
    </form>
  );
};

export default Form;
