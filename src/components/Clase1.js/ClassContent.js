import BotonesComponent from "./Botones";
import ImagenCentralComponent from "./ImagenCentral";
import img from "../../img/Cuadro_completo.png"
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";



const ClassContentComponent = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/dashboard", {}, [navigate]));

  return (
    <div className="height-100">
      <div>
      <h4>Contenido principal</h4>
        <ImagenCentralComponent titulo= {"Vocales fuertes A, E, O"} img = {img}/>
        <BotonesComponent handleOnClick={handleOnClick}/>
        </div>
    </div> 
  );
};


export default ClassContentComponent;
