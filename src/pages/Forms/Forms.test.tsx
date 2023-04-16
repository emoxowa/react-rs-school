import { render, screen } from '@testing-library/react';
import Forms from './Forms';
import { Provider } from 'react-redux';
import store from '../../store/store';

test('renders Forms component', () => {
  render(
    <Provider store={store}>
      <Forms />
    </Provider>
  );
  const formsTitle = screen.getByText(
    'Add your healthy recipe and become an author in our recipe book!'
  );
  expect(formsTitle).toBeInTheDocument();
});
