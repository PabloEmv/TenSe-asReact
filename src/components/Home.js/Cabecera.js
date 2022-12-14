import React from "react";
import logo from "../../assets/img/logo.png";

import './cabecera.css';

const CabeceraComponent = () => {
    return <header className="cabecera">
        <div className="logo">
            <a>
                <img className="logopng" src={logo} alt="este es el logo"></img>
                TenSeñas
            </a>
        </div>

        <nav className="lista">
            <a href="" className="nav">Inicio</a>
            <a href="#sobreNosotros" className="nav">Sobre nosotros</a>
            <a href="" className="nav">Conctacto</a>
            <a href="/iniciarSesion"><button class="btn btn-light buttoninicio" type="submit">Iniciar Sesión</button></a>
        </nav>
    </header>
}
export default CabeceraComponent;