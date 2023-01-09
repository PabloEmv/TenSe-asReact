import React from "react";
import "../../assets/img/img/ImagenCentral.css"


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