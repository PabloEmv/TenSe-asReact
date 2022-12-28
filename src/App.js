import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, DashboardPage,ConfigPage,ClassPage, Registro,ModuloPage, AchievementsPage } from "./pages/";
import IniciarSesion from "./pages/IniciarSesion";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />        
        <Route path="/config" element={<ConfigPage />} />
        <Route path="/class" element={<ClassPage />} />
        <Route path="/registro" element={<Registro />} />      
        <Route path="/modulo" element={<ModuloPage />} />
        <Route path="/Achievements" element={<AchievementsPage />} />
        <Route path="/iniciarSesion" element={<IniciarSesion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
