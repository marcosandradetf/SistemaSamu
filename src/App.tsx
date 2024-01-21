import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import NavBarPage from './components/NavBarPage/NavBarPage';
import FooterBarPage from './components/FooterBarPage/FooterBarPage';
import "./styles/styles.css";
import LoginPage from './components/LoginPage/LoginPage';

function App() {

  const logado: boolean = false;

  return (
    <>
      <div className='Screen'>
        <Router>
          {logado && <NavBarPage />}

          <AppRoutes />
          
          <FooterBarPage />
        </Router>
      </div>
    </>
  )
}

export default App
