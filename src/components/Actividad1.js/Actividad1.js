import React from "react";
import LetraU from "../../img/u.png"
import LetraA from "../../img/a.png"
import LetraI from "../../img/i.png"
import LetraO from "../../img/o.png"
import "./card.css"

const Actividad1Component = () => {
   return (
      <div class= "row fondoManos" >
         <h2>Actividad</h2>
      <div class="card backgroundC  col m-5" style={{width: "5%"}}>
      <img src={LetraU} class="card-img-top" alt=""/>
      <div class="card-body">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
      </div>
   </div>
   <div class="card backgroundC col m-5" style={{width: "5%"}}>
   <img src={LetraA} class="card-img-top" alt=""/>
   <div class="card-body">
   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
   </div>
</div>
<div class="card backgroundC col m-5" style={{width: "5%"}}>
      <img src={LetraI} class="card-img-top" alt=""/>
      <div class="card-body">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
      </div>
   </div>
   <div class="card backgroundC col m-5" style={{width: "5%"}}>
      <img src={LetraO} class="card-img-top" alt=""/>
      <div class="card-body">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
      </div>
   </div>
   </div>
   )
}
export default Actividad1Component;