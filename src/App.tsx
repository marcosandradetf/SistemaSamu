import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "./Routes";
import NavBarPage from './components/NavBarPage/NavBarPage';
import FooterBarPage from './components/FooterBarPage/FooterBarPage';
import "./styles/styles.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          //cabecalho
          <NavBarPage />

          // rotas
          <div>
            <AppRoutes />
          </div>

          // rodape
          <FooterBarPage />
        </Router>
      </div>
    </>
  )
}

export default App
