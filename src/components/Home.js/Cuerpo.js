import React from "react";
import './cuerpo.css'
import plan from '../../assets/img/planaprendizaje.png';
import equipo from '../../assets/img/equipoTrabajo.png';
import problematica from '../../assets/img/problematica.png';

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
            
        </div>
}

export default CuerpoComponent;