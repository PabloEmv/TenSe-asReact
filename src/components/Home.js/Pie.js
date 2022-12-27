import React from "react";
import './pie.css';
import logo from '../../assets/img/logo.png'

function PieComponent() {
    return <div className="pie">
        <footer>
            <img className="logopng" src={logo} alt="este es el logo"></img>
            <p className="letraLogo">TenSeñas</p>
            <p className="correo">soporte@tenseñas.com</p>
        </footer>
    </div>
}

export default PieComponent;