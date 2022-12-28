import React from "react";
import {BarraNavegacion, InicioSesion} from "../components";
import logoTS from "../assets/img/Logo_TenSeñas.svg";
import fondo from "../assets/img/fondoTNS.jpg";



const IniciarSesion = () =>{
    return(
        <div>
        <div>
            <BarraNavegacion/>
        </div>
          <img src={fondo} alt="Fondo" draggable="false"  style={{ zIndex:-1 , position:"fixed",height:"100%", width:"100%", top:"60px"}} />
        <div className="infoRegistro" style={{ position: 'fixed', top: "60px", left: "2%", textAlign: 'center',color:"white" }}>
          <img src={logoTS} alt="logoTS" style={{width:"75px"}}/>
          <h1 style={{textAlign: 'center'}}>TenSeñas</h1>
          <h2>¡Nos alegra volver a verte!</h2>
          <p>
          Preparado para realizar los siguientes modulos<br/> y desafios de TenSeñas mucho exito en el<br/> camino del aprendizaje y la inclusion
          </p>
        </div>
        <section >
            <InicioSesion/>
        </section>
        </div>
    );

};

export default IniciarSesion;