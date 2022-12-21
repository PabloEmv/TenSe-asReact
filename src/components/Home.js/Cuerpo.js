import React from "react";
import './cuerpo.scss'
import plan from '../assets/img/planaprendizaje.png'

function CuerpoComponent() {
    return <div className="bloqueGeneral">
        <div className="planAprendizaje">
            <img className="imgPlan" src={plan} alt="esto es una imagen"></img>
            <div className="planAprendizajeP">
            <h3>Plan de aprendizaje</h3>
                <p>La idea de TenSeñas es que aprendas de una manera interactiva realizando pequeñas actividades y juegos que al completar aumenta tu porcentaje de avanze junto a pequeños logros para motivarte en tu meta de adquerir un nuevo lenguaje y herramienta para la inclusión.</p>
            </div>
        </div>
        <div className="sobreNosotros">
            <h4>Sobre Nosotros</h4>
            <p>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
        </div>
        <div className="beneficios">
            <div className="equipoTrabajo">
                <img className="imgEquipo"></img>
                <h6>Equipo de trabajo</h6>
                <p>Nuestro equipo de trabajo se conforma por 5 desarolladores full stack con la intención de disminuir las brechas del lenguaje de señas haciendo más inclusivo nuestro país</p>
            </div>
            <div className="acceso">
                <img className="imgAcceso"></img>
                <h6>Acceso las 24 horas</h6>
                <p>Si tienes libre un momento al día lo puedes usar en TenSeñas nuestra página esta a disposición del aprendizaje las 24 horas del día.</p>
            </div>
            <div className="beneficios2">
                <div className="problematica">
                    <img className="imgProblematica"></img>
                    <h6>Problemática</h6>
                    <p>Sabias que en chile existen ... personas con discapacidad auditiva y solo ... maneja la LSCH es por eso que buscamos un cambio ven y unete al cambio asi juntos logremos un Chile mas inclusivo</p>
                </div>
            <div className="aprendeJugando">
                <img className="imgAprende"></img>
                <h6>Aprende jugando</h6>
                <p>Nunca antes fue tan fácil y entretenido aprender lenguaje de señas.
                    No te daras ni cuenta y comenzarás a comunicarte facilmente. .. </p>
            </div>
            </div>
        </div>
    </div>
}

export default CuerpoComponent;