import React from "react";


const ImagenCentralVDComponent =({titulo,imgvocaldebil}) =>{
    return(
        <div>
            <center>
            <div className="titulovocals">
                <h3>{titulo}</h3>
            </div>
            </center>
            <center>
            <div className="imagenvocaldebil">
                <img alt= "imagen" src = {imgvocaldebil} className="imagenLetras"/>
            </div>
            </center>
        </div>
    )
}
export default ImagenCentralVDComponent;