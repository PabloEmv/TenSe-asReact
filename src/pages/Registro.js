import React, {} from "react";
import {
  BarraNavegacion,
   Register
  } from "../components";
import logoTS from "../assets/img/Logo_TenSeñas.svg";
import fondo from "../assets/img/fondoTNS.jpg";




const Registro = () =>{

    return(
        <div style={{}}>
        <div>
            <BarraNavegacion/>
        </div>
          <img src={fondo} alt="Fondo" draggable="false" style={{ zIndex:-1 , position:"fixed",height:"100%", width:"100%", top:"60px"}} />
        <div className="infoRegistro" style={{ position: 'fixed', top: "100px", left: "80px", textAlign: 'center',color:"white"}}>
          <img src={logoTS} alt="logoTS" style={{width:"75px"}}/>
          <h1 style={{textAlign: 'center'}}>TenSeñas</h1>
          <h2 style={{color:"white"}}>¡Gracias por animarte!</h2>
          <p>
          Al registrarte estaras rompiendo la brecha <br/> entre miles de chilenos y lograras aprender <br/> desde lo mas básico hasta establecer <br/> conversaciones fluidas ¡Muchas gracias! por <br/>animarte en este proceso de inclusión.
          </p>
        </div>
        <section >
            <Register/>
        </section>
        </div>
    );

};

export default Registro;