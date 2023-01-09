import React from "react";
import './cuerpo.css'
import plan from '../../assets/img/planaprendizaje.png';

function CuerpoComponent() {
    return <div className="bloqueGeneral" >
            <div className="planAprendizaje">
                <img className="imgPlan" src={plan} alt="esto es una imagen"></img>
                <div>
                    <h3>Plan de aprendizaje</h3>
                    <p >La idea de TenSeñas es que aprendas de una manera interactiva realizando pequeñas actividades y juegos que al completar aumenta tu porcentaje de avanze junto a pequeños logros para motivarte en tu meta de adquerir un nuevo lenguaje y herramienta para la inclusión.</p>
                </div>
            </div>
            <div className="sobreNosotros bg-light bg-opacity-25">
                <h4>Sobre Nosotros</h4>
                <p>Queremos contribuir a la inclusión del lenguaje de señas mediante la enseñanza de esta lengua de manera didactica y sencilla.</p>
            </div>
        </div>
}

export default CuerpoComponent;