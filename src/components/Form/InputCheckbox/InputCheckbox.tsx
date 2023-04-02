import React from 'react';
import { InputCheckboxProps } from '../../../types';

const InputCheckbox: React.FC<InputCheckboxProps> = ({ label, name, register, error }) => (
  <div className="form__input-group">
    <label htmlFor={label} className="form__label">
      {label}
    </label>
    <div className="form__input-wrapper">
      <input type="checkbox" id={label} {...register(name)} />
      <span className="error__text">{error}</span>
    </div>
  </div>
);

export default InputCheckbox;
