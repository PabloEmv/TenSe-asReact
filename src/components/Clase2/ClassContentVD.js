import BotonesComponent from "../Clase1.js/Botones";
import ImagenCentralVDComponent from "./VocalesDebiles";
import imgvocaldebil from "../../assets/img/img/VocalesDebiles.png"
import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";




const ClassContentVDComponent = () => {

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


  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/dashboard", {}, [navigate]));

  return (
    <div className="height-100">
      <div>
        <ImagenCentralVDComponent titulo= {"Vocales Debíles I, U"} imgvocaldebil = {imgvocaldebil}/>
        {/* <BotonesComponent handleOnClick={handleOnClick}/> */}
        <div className="botonesLetras mx-auto" style={{ display: 'flex', justifyContent: 'space-between'}}>
          <div style={{ margin: "3%" }}>
            <a href="/class">
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
            <a href="/actividad1a">
              <button
                type="button"
                class="btn"
                style={{ border: '2px solid', borderColor: '#25a5d5', backgroundColor: '#25a5d5' }}           >
                Siguiente
              </button>
            </a>
          </div>
        </div>
        </div>
    </div> 
  );
};


export default ClassContentVDComponent;