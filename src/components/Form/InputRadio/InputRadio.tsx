import React from 'react';
import { InputRadioProps } from '../../../types';

const InputRadio: React.FC<InputRadioProps> = ({ label, name, register, required, error }) => (
  <div className="form__input-group">
    <p className="form__label">{label}</p>
    <div className="form__radio-wrapper">
      <label>
        <input type="radio" value="Yes" {...register(name, { required })} />
        Yes
      </label>
      <label>
        <input type="radio" value="No" {...register(name, { required })} />
        No
      </label>
      <div className="error__text">{error}</div>
    </div>
  </div>
);

export default InputRadio;
