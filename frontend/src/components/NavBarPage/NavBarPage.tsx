import React, { FC, useState } from 'react';
import { NavBarPageWrapper } from './NavBarPage.styled';
import ModalGerarChamado from '../ModalGerarChamado/ModalGerarChamado';

interface NavBarPageProps { }

const NavBarPage: FC<NavBarPageProps> = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const abrirModalGerarChamado = () => {
    setModalOpen(true);
  };

  const fecharModalGerarChamado = () => {
    setModalOpen(false);
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
                <button className='btn btn-light text-danger fw-bold'>Regulação Primária</button>
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

      <ModalGerarChamado isOpen={isModalOpen} onClose={fecharModalGerarChamado}>
      </ModalGerarChamado>

    </NavBarPageWrapper >
  );
};

export default NavBarPage;
