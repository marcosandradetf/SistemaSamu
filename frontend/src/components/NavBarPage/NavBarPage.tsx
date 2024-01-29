import React, { FC, useState } from 'react';
import { NavBarPageWrapper } from './NavBarPage.styled';
import ModalGerarChamado from '../ModalGerarChamado/ModalGerarChamado';
import RegulacaoPrimaria from '../RegulacaoPrimaria/RegulacaoPrimaria';

interface NavBarPageProps { }

const NavBarPage: FC<NavBarPageProps> = () => {
  // Tela de ficha inicial
  const [fichaInicialAberta, abrirFichaInicial] = useState(false);
  const abrirModalGerarChamado = () => {
    abrirFichaInicial(true);
    abrirfichaRegPrimar(false);
  };
  const fecharModalGerarChamado = () => {
    abrirFichaInicial(false);
  };

  // Tela de ficha de regulacao medica inical
  const [fichaRegPrimarAberta, abrirfichaRegPrimar] = useState(false);
  const abrirRegulacaoPrimaria = () => {
    abrirfichaRegPrimar(true);
    abrirFichaInicial(false);
  };
  const fecharRegulacaoPrimaria = () => {
    abrirfichaRegPrimar(false);
  };

  return (

    < NavBarPageWrapper data-testid="NavBarPage" >

      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <div className="container-fluid">
          <a href="#"><img src="/src/assets/samu.png" alt="logo samu" width={40} className='me-3' /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-1">
                <button className='btn btn-light text-danger fw-bold' onClick={abrirModalGerarChamado}>Gerar Chamado</button>
              </li>
              <li className="nav-item me-1">
                <button className='btn btn-light text-danger fw-bold' onClick={abrirRegulacaoPrimaria}>Regulação Primária</button>
              </li>
              <li className="nav-item me-1">
                <button className='btn btn-light text-danger fw-bold'>Pesquisar Chamados</button>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item me-1">
                <button className='btn btn-light text-danger fw-bold'>Sair</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ModalGerarChamado isOpen={fichaInicialAberta} onClose={fecharModalGerarChamado}>
      </ModalGerarChamado>

      <RegulacaoPrimaria isOpen={fichaRegPrimarAberta} onClose={fecharRegulacaoPrimaria}>
      </RegulacaoPrimaria>

    </NavBarPageWrapper >
  );
};

export default NavBarPage;
