import BotonesComponent from "../Clase1.js/Botones";
import ImagenCentralVDComponent from "./VocalesDebiles";
import imgvocaldebil from "../../img/VocalesDebiles.png"
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";



const ClassContentVDComponent = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/dashboard", {}, [navigate]));

  return (
    <div className="height-100">
      <div>
        <ImagenCentralVDComponent titulo= {"Vocales Debíles I, U"} imgvocaldebil = {imgvocaldebil}/>
        {/* <BotonesComponent handleOnClick={handleOnClick}/> */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
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
            <a href="/actividad1">
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
    </div> 
  );
};


export default ClassContentVDComponent;