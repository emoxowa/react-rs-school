import './form.css';
import { FormProps, IFormValues } from '../../types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { startsWithUppercase } from '../../utils/utils';
import InputText from './InputText/InputText';
import InputDate from './InputDate/InputDate';

const Form: React.FC<FormProps> = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <InputText
        label="Your name"
        register={(options) => register('Your name', { ...options, validate: startsWithUppercase })}
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
      <input className="form__button" type="submit" />
      <div className="form__message">Jopa</div>
    </form>
  );
};

export default Form;
