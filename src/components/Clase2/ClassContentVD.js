import BotonesComponent from "../Clase1.js/Botones";
import ImagenCentralVDComponent from "./VocalesDebiles";
import imgvocaldebil from "../../assets/img/img/VocalesDebiles.png"
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";



const ClassContentVDComponent = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/dashboard", {}, [navigate]));

  return (
    <div className="height-100">
      <div>
        <ImagenCentralVDComponent titulo= {"Vocales Debíles I, U"} imgvocaldebil = {imgvocaldebil}/>
        <BotonesComponent handleOnClick={handleOnClick}/>
        </div>
    </div> 
  );
};


export default ClassContentVDComponent;