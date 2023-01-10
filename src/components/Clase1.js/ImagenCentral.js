import React from "react";


const ImagenCentralComponent =({titulo,img}) =>{
    return(
        <div>
            <center>
            <div className="titulovocals">
                <h3>{titulo}</h3>
            </div>
            </center>
            <center>
            <div className="imagenvocal">
                <img alt= "imagen" src ={img} className="imagenLetras"/>
            </div>
            </center>
            
        </div>
    )
}
export default ImagenCentralComponent;