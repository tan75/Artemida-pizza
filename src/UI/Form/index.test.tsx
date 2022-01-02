import { render, screen } from '@testing-library/react';
import Form from './index';

describe('pizza form', () => {
  it('renders ingredients correctly', () => {
    const { getByText } = render(<Form />);

    expect(getByText('thin base')).toBeInTheDocument();
    expect(getByText('thick base')).toBeInTheDocument();
    expect(getByText('thin base')).toBeInTheDocument();
    expect(getByText('tomato sauce')).toBeInTheDocument();
    expect(getByText('white sauce')).toBeInTheDocument();
    expect(getByText('hot sauce')).toBeInTheDocument();
    expect(getByText('mozzarella')).toBeInTheDocument();
  });
});
