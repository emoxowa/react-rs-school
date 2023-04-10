import { useController } from 'react-hook-form';
import { InputFileProps } from '../../../types';

const InputFile: React.FC<InputFileProps> = ({ label, name, required, error }) => {
  const { field } = useController({
    name,
    rules: { required },
  });

  return (
    <div className="form__input-group">
      <label htmlFor={label} className="form__label">
        {label}
      </label>
      <div className="form__input-wrapper">
        <input
          type="file"
          id={label}
          accept="image/*"
          onChange={(e) => field.onChange(e.target.files?.[0])}
        />
        <span className="error__text">{error}</span>
      </div>
    </div>
  );
};
export default InputFile;
