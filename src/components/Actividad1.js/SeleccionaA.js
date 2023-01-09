import React, {useState} from "react";
import swal from 'sweetalert';
import LetraU from "../../assets/img/img/u.png"
import LetraA from "../../assets/img/img/a.png"
import LetraI from "../../assets/img/img/i.png"
import LetraO from "../../assets/img/img/o.png"
import "./card.css"
import "./Actividad.css"
import { ElectricScooter } from "@mui/icons-material";

const SeleccionaAComponent = () => {
   
      const [selected, setSelected] = useState('')
    
      const handleChange = (event) => {
        setSelected(event.target.value)
      }

      if (selected == 'LetraA') {
         const botonSiguienteAct = document.querySelector('#botonSiguienteAct')
         swal("Correcto", "Dale Ok", "success");
         botonSiguienteAct.classList.remove("visually-hidden");
      } else if (selected != 'LetraA' && selected != '') {
         swal ( "Oops", "Incorrecto, ¡Sigue intentando!", "error")
      } 
         
      

   return (
      <div>
         <center><div class="titulovocal"><h2>Actividad 1</h2></div></center>

         <div class="row backgroundImgCarrusel" >
            <div><center><div class="backgroundT"><h2>Selecciona la Letra "A"</h2></div></center></div>
            <div class="card backgroundC  col m-5" style={{ width: "5%" }}>
               <img src={LetraU} class="card-img-top" alt="" />
               <div class="card-body">
                  <input class="form-check-input position-absolute start-50 translate-middle" type="radio" name="flexRadioDefault" value="LetraU" checked={selected === 'LetraU'} onChange={handleChange} />
               </div>
            </div>
            <div class="card backgroundC col m-5" style={{ width: "5%" }}>
               <img src={LetraA} class="card-img-top" alt="" />
               <div class="card-body">
                  <input class="form-check-input position-absolute start-50 translate-middle" type="radio" name="flexRadioDefault" value="LetraA" checked={selected === 'LetraA'} onChange={handleChange} />
               </div>
            </div>
            <div class="card backgroundC col m-5" style={{ width: "5%" }}>
               <img src={LetraI} class="card-img-top" alt="" />
               <div class="card-body">
                  <input class="form-check-input position-absolute start-50 translate-middle" type="radio" name="flexRadioDefault" value="LetraI" checked={selected === 'LetraI'} onChange={handleChange} />
               </div>
            </div>
            <div class="card backgroundC col m-5" style={{ width: "5%" }}>
               <img src={LetraO} class="card-img-top" alt="" />
               <div class="card-body">
                  <input class="form-check-input position-absolute start-50 translate-middle" type="radio" name="flexRadioDefault" value="LetraO" checked={selected === 'LetraO'} onChange={handleChange} />
               </div>
            </div>
         </div>
         <div class="d-flex justify-content-between" style={{ margin: "3%" }}>
            <a href="/Actividad1O"><button type="button" class="btn" style={{ border: '2px solid', borderColor: '#25a5d5', backgroundColor: 'ffffff' }} >Anterior </button></a>
            <a href="/modulo" className="visually-hidden" id="botonSiguienteAct"><button type="button" class="btn" style={{ border: '2px solid', borderColor: '#25a5d5', backgroundColor: '#25a5d5' }} >Siguiente </button></a>
         </div>
      </div>
   )
}
export default SeleccionaAComponent;