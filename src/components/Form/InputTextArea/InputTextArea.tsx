import { InputProps } from '../../../types';

const InputTextarea: React.FC<InputProps> = ({ label, register, required, error }) => (
  <div className="form__input-group">
    <label htmlFor={label} className="form__label">
      {label}
    </label>
    <div className="form__input-wrapper">
      <textarea id={label} rows={10} {...register({ required })}></textarea>
      <span className="error__text">{error}</span>
    </div>
  </div>
);

export default InputTextarea;
