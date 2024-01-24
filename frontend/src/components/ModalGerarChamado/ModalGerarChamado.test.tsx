import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalGerarChamado from './ModalGerarChamado';

describe('<ModalGerarChamado />', () => {
  test('it should mount', () => {
    render(<ModalGerarChamado />);
    
    const modalGerarChamado = screen.getByTestId('ModalGerarChamado');

    expect(modalGerarChamado).toBeInTheDocument();
  });
});