import React from "react";
import "../../components/Nav/BarraNavegacion.css"

function BarraNavegacion() {
  return <header className="cabecera">
      <div className="logo">        
      </div>
      <nav className="lista">
          <a href="" className="nav">Inicio</a>
          <a href="" className="nav">Sobre nosotros</a>
          <a href="" className="nav">Conctacto</a>
          <button class="btn btn-light buttoninicio" type="submit">Iniciar Sesión</button>
      </nav>
  </header>
}

export default BarraNavegacion;