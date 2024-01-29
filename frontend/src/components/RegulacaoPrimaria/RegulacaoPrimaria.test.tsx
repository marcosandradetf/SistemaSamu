import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegulacaoPrimaria from './RegulacaoPrimaria';

describe('<RegulacaoPrimaria />', () => {
  test('it should mount', () => {
    render(<RegulacaoPrimaria />);
    
    const regulacaoPrimaria = screen.getByTestId('RegulacaoPrimaria');

    expect(regulacaoPrimaria).toBeInTheDocument();
  });
});