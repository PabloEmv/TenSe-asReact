import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, DashboardPage,ConfigPage,ClassPage, Registro } from "./pages/";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />        
        <Route path="/config" element={<ConfigPage />} />
        <Route path="/Class" element={<ClassPage />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
