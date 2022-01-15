import { render, screen } from '@testing-library/react';
import Form from './index';
// import * as jestDOM from '@testing-library/jest-dom';

describe('pizza form', () => {
  // TODO: add missing ingredients
  it.skip('renders ingredients correctly', () => {
    const { getByText } = render(<Form />);

    expect(getByText('thin base')).toBeInTheDocument();
    expect(getByText('thick base')).toBeInTheDocument();
    expect(getByText('thin base')).toBeInTheDocument();
    expect(getByText('tomato sauce')).toBeInTheDocument();
    expect(getByText('white sauce')).toBeInTheDocument();
    expect(getByText('hot sauce')).toBeInTheDocument();
    expect(getByText('mozzarella')).toBeInTheDocument();
  });

  it.skip('renders Loading', () => {
    const { getByText } = render(<Form />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders fieldset items', () => {
    const { queryByText } = render(<Form />);
    expect(queryByText('cheese')).toBeInTheDocument();
    expect(queryByText('cheese')).toHaveTextContent('cheese');
  });
});
