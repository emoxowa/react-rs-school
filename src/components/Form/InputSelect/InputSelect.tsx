import { InputProps } from '../../../types';

const InputSelect: React.FC<InputProps> = ({ label, register, required, error }) => (
  <div className="form__input-group">
    <label htmlFor={label} className="form__label">
      {label}
    </label>
    <div className="form__input-wrapper">
      <select id={label} {...register({ required })}>
        <option value="Breakfast">Breakfast</option>
        <option value="Soups">Soups</option>
        <option value="Salads">Salads</option>
        <option value="Pasta">Pasta</option>
        <option value="Pizza">Pizza</option>
        <option value="Seafood">Seafood</option>
        <option value="Desserts">Desserts</option>
        <option value="Drinks">Drinks</option>
      </select>
      <span className="error__text">{error}</span>
    </div>
  </div>
);

export default InputSelect;
