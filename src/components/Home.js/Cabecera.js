import React from "react";
import './cabecera.scss';
import logo from '../assets/img/logo.png'

function CabeceraComponent() {
    return <header className="cabecera">
        <div className="logo">
            <a>

            <img className="logopng" src={logo} alt="este es el logo"></img>
            {/* <h4 className="logoLetra">TenSeñas</h4> */}
            TenSeñas
            </a>
        </div>

        <nav className="lista">
            <a href="" className="nav">Inicio</a>
            <a href="" className="nav">Sobre nosotros</a>
            <a href="" className="nav">Conctacto</a>
            <button class="btn btn-light buttoninicio" type="submit">Iniciar Sesión</button>
        </nav>
    </header>
}
export default CabeceraComponent;