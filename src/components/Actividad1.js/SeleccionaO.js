import React from "react";
import LetraA from "../../assets/img/img/a.png"
import LetraO from "../../assets/img/img/o.png"
import Numero3 from "../../assets/img/img/3.png"
import Numero2 from "../../assets/img/img/2.png"
import "./card.css"
import "./Actividad.css"

const SeleccionaOComponent = () => {
    return (
        <div>
         <center><div class="titulovocal"><h2>Actividad 1</h2></div></center>   
                  <div class="row backgroundImgCarrusel">
                  <center><div class="backgroundT"><h2>Selecciona la Letra "O"</h2></div></center>
                     <div class="card backgroundC  col m-5" style={{ width: "5%" }}>
                        <img src={Numero3} class="card-img-top" style={{ width: "135%" }} alt="" />
                        <div class="card-body">
                           <input class="form-check-input position-absolute start-50 translate-middle" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </div>
                     </div>
                     <div class="card backgroundC col m-5" style={{ width: "5%" }}>
                        <img src={LetraA} class="card-img-top" alt="" />
                        <div class="card-body">
                           <input class="form-check-input position-absolute start-50 translate-middle" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </div>
                     </div>
                     <div class="card backgroundC col m-5" style={{ width: "5%" }}>
                        <img src={Numero2} class="card-img-top" style={{ width: "115%" }} alt="" />
                        <div class="card-body">
                           <input class="form-check-input position-absolute start-50 translate-middle" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </div>
                     </div>
                     <div class="card backgroundC col m-5" style={{ width: "5%" }}>
                        <img src={LetraO} class="card-img-top" alt="" />
                        <div class="card-body">
                           <input class="form-check-input position-absolute start-50 translate-middle" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </div>
                     </div>
                  </div>
                  <div class="d-flex justify-content-between" style={{ margin: "3%" }}>
               <a href="/Actividad1I"><button type="button" class="btn" style={{ border: '2px solid', borderColor: '#25a5d5', backgroundColor: 'ffffff' }} >Anterior </button></a>
                  <a href="/Actividad1A"><button type="button" class="btn" style={{ border: '2px solid', borderColor: '#25a5d5', backgroundColor: '#25a5d5' }} >Siguiente </button></a>
               </div>
               </div>
    )
}
export default SeleccionaOComponent;