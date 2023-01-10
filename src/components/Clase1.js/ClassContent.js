import BotonesComponent from "./Botones";
import ImagenCentralComponent from "./ImagenCentral";
import img from "../../assets/img/img/Cuadro_completo.png"
import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './class1.css'




const ClassContentComponent = () => {
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
        <ImagenCentralComponent titulo={"Vocales fuertes A, E, O"} img={img} />
        {/*   <BotonesComponent handleOnClick={handleOnClick}/> */}
        <div className="botonesLetras mx-auto" style={{ display: 'flex', justifyContent: 'space-between'}}>
          <div style={{ margin: "3%" }}>
            <a href="/dashboard">
            <button
              type="button"
              class="btn"
              style={{ border: '2px solid', borderColor: '#25a5d5', backgroundColor: 'ffffff' }}
              >Cancelar
            </button>
              </a>
          </div>
          <div style={{ margin: "3%" }}>
            <a href="/class2">
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


export default ClassContentComponent;
