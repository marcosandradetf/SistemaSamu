import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* Adicione mais rotas conforme necessário */}
      <Route path="" element={< f/>} />
    </Routes>
  );
};

export default AppRoutes;