import { InputProps } from '../../../types';

const InputText: React.FC<InputProps> = ({ label, register, required, error }) => (
  <div className="form__input-group">
    <label htmlFor={label} className="form__label">
      {label}
    </label>
    <div className="form__input-wrapper">
      <input id={label} {...register({ required })} />
      <span className="error__text">{error}</span>
    </div>
  </div>
);

export default InputText;
