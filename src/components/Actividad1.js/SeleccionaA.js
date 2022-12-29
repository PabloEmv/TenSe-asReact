import React from "react";
import LetraU from "../../assets/img/img/u.png"
import LetraA from "../../assets/img/img/a.png"
import LetraI from "../../assets/img/img/i.png"
import LetraO from "../../assets/img/img/o.png"
import "./card.css"
import "./Actividad.css"

const SeleccionaAComponent = () => {
   return (
      <div>
         <center><div class="titulovocal"><h2>Actividad 1</h2></div></center>

         <div class="row backgroundImgCarrusel" >
            <div><center><div class="backgroundT"><h2>Selecciona la Letra "A"</h2></div></center></div>
            <div class="card backgroundC  col m-5" style={{ width: "5%" }}>
               <img src={LetraU} class="card-img-top" alt="" />
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
               <img src={LetraI} class="card-img-top" alt="" />
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
            <a href="/Actividad1O"><button type="button" class="btn" style={{ border: '2px solid', borderColor: '#25a5d5', backgroundColor: 'ffffff' }} >Anterior </button></a>
            <a href="/modulo"><button type="button" class="btn" style={{ border: '2px solid', borderColor: '#25a5d5', backgroundColor: '#25a5d5' }} >Siguiente </button></a>
         </div>
      </div>
   )
}
export default SeleccionaAComponent;