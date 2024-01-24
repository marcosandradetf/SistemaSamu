import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FooterBarPage from './FooterBarPage';

describe('<FooterBarPage />', () => {
  test('it should mount', () => {
    render(<FooterBarPage />);
    
    const footerBarPage = screen.getByTestId('FooterBarPage');

    expect(footerBarPage).toBeInTheDocument();
  });
});