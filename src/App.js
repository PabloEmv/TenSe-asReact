import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, DashboardPage,ConfigPage,ClassPage,Class2Page, Actividad1IPage, Actividad1OPage,Actividad1APage, Registro,ModuloPage, AchievementsPage,IniciarSesion } from "./pages/";


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
        <Route path="/Actividad1A" element={<Actividad1APage />} />
        <Route path="/Actividad1I" element={<Actividad1IPage />} />
        <Route path="/Actividad1O" element={<Actividad1OPage />} />
        <Route path="/iniciarSesion" element={<IniciarSesion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
