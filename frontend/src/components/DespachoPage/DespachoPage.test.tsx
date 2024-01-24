import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DespachoPage from './DespachoPage';

describe('<DespachoPage />', () => {
  test('it should mount', () => {
    render(<DespachoPage />);
    
    const despachoPage = screen.getByTestId('DespachoPage');

    expect(despachoPage).toBeInTheDocument();
  });
});