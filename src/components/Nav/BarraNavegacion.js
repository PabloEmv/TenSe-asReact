import React from "react";
import "../../components/Nav/BarraNavegacion.css"

function BarraNavegacion() {
  return <header className="cabecera">
      <div className="logo">        
      </div>
      <nav className="lista">
          <a href="/" className="nav">Inicio</a>
          <a href="/#sobreNosotros" className="nav">Sobre nosotros</a>
          <a href="" className="nav">Conctacto</a>
          <a href="/iniciarSesion">
            <button class="btn btn-light buttoninicio" type="submit">Iniciar Sesión</button>
            </a>
      </nav>
  </header>
}

export default BarraNavegacion;