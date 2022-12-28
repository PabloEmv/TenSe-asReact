import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, DashboardPage,ConfigPage,ClassPage,Class2Page, Actividad1Page, Registro,ModuloPage, AchievementsPage } from "./pages/";


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
        <Route path="/Class2" element={<Class2Page />} />
        <Route path="/Actividad1" element={<Actividad1Page />} />
        <Route path="/iniciarSesion" element={<IniciarSesion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
