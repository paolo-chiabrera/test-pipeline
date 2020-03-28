import React from 'react';
import { render } from '@testing-library/react';
import BigTitle from './BigTitle';

test('renders the title', () => {
  const { getByText } = render(<BigTitle />);
  expect(getByText(/Hey Hey/i)).toBeInTheDocument();
});
