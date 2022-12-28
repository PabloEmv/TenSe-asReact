import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { HomePage, DashboardPage,ConfigPage,ClassPage, Registro,ModuloPage } from "./pages/";
import IniciarSesion from "./pages/IniciarSesion";
=======
import { HomePage, DashboardPage,ConfigPage,ClassPage, Registro,ModuloPage, AchievementsPage } from "./pages/";
>>>>>>> cf844d8961d512de92d707004839d73e5e0b49d0


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
<<<<<<< HEAD
        <Route path="/iniciarSesion" element={<IniciarSesion />} />
=======
        <Route path="/Achievements" element={<AchievementsPage />} />
>>>>>>> cf844d8961d512de92d707004839d73e5e0b49d0
      </Routes>
    </BrowserRouter>
  );
};

export default App;
