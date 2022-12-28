import React from "react";
import './login.css';
import Rocco from "../../assets/img/Roccoder.png"
import imglogin from '../../assets/img/homelog.png';

function LoginComponent() {
    return <section className="cuerpologin">

        <img className="imgMapache" src={Rocco}></img>
        <div className="login">
            <div className="contenedorImg row">
                    <img classname="pict" src={imglogin}></img>
            </div>
            <p>Educación e integracion del LSCH de una forma entretenida, rompiendo brechas en la comunicación</p>
            <div class="d-grid gap-2 col-9 mx-auto">
                <button type="button" class="btn btn-outline-primary">Iniciar Sesión</button>
                <a href="/registro"><button class="btn btn-primary buttonRegistro" type="button">Registrarse</button></a>
            </div>
        </div>
    </section>
}

export default LoginComponent;