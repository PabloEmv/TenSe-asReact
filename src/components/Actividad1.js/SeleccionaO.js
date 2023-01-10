import React, {useState, useEffect} from "react";
import swal from 'sweetalert';
import LetraA from "../../assets/img/img/a.png"
import LetraO from "../../assets/img/img/o.png"
import Numero3 from "../../assets/img/img/3.png"
import Numero2 from "../../assets/img/img/2.png"
import "./card.css"
import "./Actividad.css"

const SeleccionaOComponent = () => {

   function removeActiveClass() {
      const modulo = document.querySelector('.nav_link');
      modulo.className = modulo.className.replace('active', '');
    }
  
    function addActiveClass() {
      const config = document.querySelector('.modulo_nav');
      config.classList.add('active');
    }
    useEffect(removeActiveClass, []);
    useEffect(addActiveClass, []);

    ///////////////////////////////////////////
   const [selected, setSelected] = useState('')
    
      const handleChange = (event) => {
        setSelected(event.target.value)
      }

      if (selected == 'LetraO') {
         const botonSiguienteAct = document.querySelector('#botonSiguienteAct')
         swal("Correcto", "Dale Ok", "success");
         botonSiguienteAct.classList.remove("visually-hidden");
      } else if (selected != 'LetraO' && selected != '') {
         swal ( "Oops", "Incorrecto, ¡Sigue intentando!", "error")
      }
    return (
        <div>
         <center><div class="titulovocal"><h2>Actividad 1</h2></div></center>   
                  <div class="row backgroundImgCarrusel">
                  <center><div class="backgroundT"><h2>Selecciona la Letra "O"</h2></div></center>
                     <div class="card backgroundC  col m-5" style={{ width: "5%" }}>
                        <img src={Numero3} class="card-img-top" style={{ width: "135%" }} alt="" />
                        <div class="card-body">
                           <input class="form-check-input position-absolute start-50 translate-middle" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Numero3" checked={selected === 'incorrecto'} onChange={handleChange}/>
                        </div>
                     </div>
                     <div class="card backgroundC col m-5" style={{ width: "5%" }}>
                        <img src={LetraA} class="card-img-top" alt="" />
                        <div class="card-body">
                           <input class="form-check-input position-absolute start-50 translate-middle" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="LetraA" checked={selected === 'LetraA'} onChange={handleChange}/>
                        </div>
                     </div>
                     <div class="card backgroundC col m-5" style={{ width: "5%" }}>
                        <img src={Numero2} class="card-img-top" style={{ width: "115%" }} alt="" />
                        <div class="card-body">
                           <input class="form-check-input position-absolute start-50 translate-middle" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Numero2" checked={selected === 'Numero2'} onChange={handleChange}/>
                        </div>
                     </div>
                     <div class="card backgroundC col m-5" style={{ width: "5%" }}>
                        <img src={LetraO} class="card-img-top" alt="" />
                        <div class="card-body">
                           <input class="form-check-input position-absolute start-50 translate-middle" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="LetraO" checked={selected === 'LetraO'} onChange={handleChange}/>
                        </div>
                     </div>
                  </div>
                  <div class="d-flex justify-content-between" style={{ margin: "6%" }}>
               <a href="/Actividad1I"><button type="button" class="btn" style={{ border: '2px solid', borderColor: '#25a5d5', backgroundColor: 'ffffff' }} >Anterior </button></a>
                  <a href="/modulo" className="visually-hidden" id="botonSiguienteAct"><button type="button" class="btn" style={{ border: '2px solid', borderColor: '#25a5d5', backgroundColor: '#25a5d5' }} >Siguiente </button></a>
               </div>
               </div>
    )
}
export default SeleccionaOComponent;