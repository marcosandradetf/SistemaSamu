import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBarPage from './NavBarPage';

describe('<NavBarPage />', () => {
  test('it should mount', () => {
    render(<NavBarPage />);
    
    const navBarPage = screen.getByTestId('NavBarPage');

    expect(navBarPage).toBeInTheDocument();
  });
});