import React from "react";
import './login.scss'
import Rocco from '../assets/img/Roccoder.png'

function LoginComponent() {
    return <section className="cuerpologin">

        <img className="imgMapache" src={Rocco}></img>

        <div className="login">
            <div className="contenedorImg">
            <img></img>
        </div>
            <p>Educación e integracion del LSCH de una forma entretenida, rompiendo brechas en la comunicación</p>
            <div class="d-grid gap-2 col-9 mx-auto">
            <button type="button" class="btn btn-outline-primary">Iniciar Sesión</button>
                <button class="btn btn-primary buttonRegistro" type="button">Registrarse</button>
            </div>
        </div>
    </section>
}

export default LoginComponent;