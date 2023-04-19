import { InputProps } from '../../../types';

const InputDate: React.FC<InputProps> = ({ label, register, required, error }) => (
  <div className="form__input-group">
    <label htmlFor={label} className="form__label">
      {label}
    </label>
    <div className="form__input-wrapper">
      <input
        type="date"
        id={label}
        {...register({ required })}
        min={new Date().toISOString().split('T')[0]}
      />
      <span className="error__text">{error}</span>
    </div>
  </div>
);

export default InputDate;
