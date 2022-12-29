import React from "react";
import "../../assets/img/img/ImagenCentral.css";

const ImagenCentralComponent =({titulo,img}) =>{
    return(
        <div>
            <center>
            <div className="titulovocal">
                <h3>{titulo}</h3>
            </div>
            </center>
            <center>
            <div className="imagenvocal">
                <img alt= "imagen" src = {img}/>
            </div>
            </center>
            
        </div>
    )
}
export default ImagenCentralComponent;