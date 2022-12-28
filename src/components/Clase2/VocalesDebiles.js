import React from "react";
import "../../img/ImagenCentral.css"
import imgvocaldebil from"../../img/VocalesDebiles.png"

const ImagenCentralVDComponent =({titulo,imgvocaldebil}) =>{
    return(
        <div>
            <center>
            <div className="titulovocal">
                <h3>{titulo}</h3>
            </div>
            </center>
            <center>
            <div className="imagenvocaldebil">
                <img alt= "imagen" src = {imgvocaldebil}/>
            </div>
            </center>
        </div>
    )
}
export default ImagenCentralVDComponent;