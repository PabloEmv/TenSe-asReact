import React from "react";
import './cuerpo2.css'
import equipo from '../../assets/img/equipoTrabajo.png';
import problematica from '../../assets/img/problematica.svg';
import tiempo from '../../assets/img/homeTime.png';
import aprende from '../../assets/img/aprendeJugando.png';

function CuerpoComponent2() {
    return (

        <div className="beneficios">
        <div className="primer">
            <div className="a">
                <img className="imgEquipo" src={equipo}></img>
                <div className="equipo">
                    <h5 id="texto"class="fw-semibold">Equipo de trabajo</h5>
                    <p id="texto">Nuestro equipo de trabajo se conforma por 5 desarolladores full stack con la intención de disminuir las brechas del lenguaje de señas haciendo más inclusivo nuestro país</p>
                </div>
            </div>
            <div className="a">
                <img className="imgAcceso" src={tiempo}></img>
                <div className="acceso">
                    <h5 id="texto" class="fw-semibold">Acceso las 24 horas</h5>
                    <p id="texto">Si tienes libre un momento al día lo puedes usar en TenSeñas nuestra página esta a disposición del aprendizaje las 24 horas del día.</p>
                </div>
            </div>
        </div>

        <div className="segundo">
            <div className="aa">
                <img className="imgProblematica" src={problematica} alt="imagen"></img>
                <div className="problematica">
                    <h5 id="texto" class="fw-semibold">Problemática</h5>
                    <p id="texto">Sabias que en chile existen ... personas con discapacidad auditiva y solo ... maneja la LSCH es por eso que buscamos un cambio ven y unete al cambio asi juntos logremos un Chile mas inclusivo</p>
                </div>
            </div>
            <div className="aa">
                <img className="imgAprende" src={aprende}></img>
                <div className="aprende">
                    <h5 id="texto"class="fw-semibold">Aprende jugando</h5>
                    <p id="texto">Nunca antes fue tan fácil y entretenido aprender lenguaje de señas.
                        No te daras ni cuenta y comenzarás a comunicarte facilmente. .. </p>
                </div>
            </div>
        </div>
    </div>
)
}

export default CuerpoComponent2;