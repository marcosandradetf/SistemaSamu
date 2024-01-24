import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import DespachoPage from "./components/DespachoPage/DespachoPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* Adicione mais rotas conforme necessário */}
      <Route path="" element={<DespachoPage />} />
    </Routes>
  );
};

export default AppRoutes;