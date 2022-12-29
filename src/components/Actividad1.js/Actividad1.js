import React from "react";
import LetraU from "../../img/u.png"
import LetraA from "../../img/a.png"
import LetraI from "../../img/i.png"
import LetraO from "../../img/o.png"
import Numero3 from "../../img/3.png"
import Numero2 from "../../img/2.png"
import "./card.css"
import "./Actividad.css"

const Actividad1Component = () => {
   return (
      <div>
         <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
               <button data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
               <button data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
               <button data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <center><div class="titulovocal"><h2>Actividad 1</h2></div></center>
            <div class="carousel-inner backgroundImgCarrusel" id="carrusel">
               <div class="carousel-item active">
                  {/* --------------------------------------------- */}
                  <center><div class="backgroundT"><h2>Selecciona la Letra "A"</h2></div></center>
                  <div class="row" >
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
                  {/* ---------------------------------------------------- */}
               </div>
               <div class="carousel-item " >
                  <center><div class="backgroundT"><h2>Selecciona la Letra "O"</h2></div></center>
                  <div class="row" >
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
               </div>
               <div class="carousel-item">
                  <center><div class="backgroundT"><h2>Selecciona la Letra "I"</h2></div></center>
                  <div class="row" >
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
               </div>
            </div>
         </div>
         <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ margin: "3%" }}>
               <a href="/class2">
                  <button
                     type="button"
                     class="btn"
                     style={{ border: '2px solid', borderColor: '#25a5d5', backgroundColor: 'ffffff' }}
                  // onClick={() => userEdit(state)}
                  >Anterior
                  </button>
               </a>
            </div>
            <div style={{ margin: "3%" }}>
               <a href="#">
                  <button
                     type="button"
                     class="btn"
                     style={{ border: '2px solid', borderColor: '#25a5d5', backgroundColor: '#25a5d5' }}
                                 /*                 onClick={() => userEdit(state)}
                                 */              >
                     Siguiente
                  </button>
               </a>
            </div>
         </div>
      </div>
   )
}
export default Actividad1Component;

