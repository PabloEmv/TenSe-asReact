import BotonesComponent from "./Botones";
import ImagenCentralComponent from "./ImagenCentral";
import img from "../../img/Cuadro_completo.png"
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";



const ClassContentComponent = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/dashboard", {}, [navigate]));

  return (
    <div className="height-100">
      <div>
        <ImagenCentralComponent titulo={"Vocales fuertes A, E, O"} img={img} />
        {/*   <BotonesComponent handleOnClick={handleOnClick}/> */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ margin: "3%" }}>
            <a href="/dashboard">
            <button
              type="button"
              class="btn"
              style={{ border: '2px solid', borderColor: '#25a5d5', backgroundColor: 'ffffff' }}
              // onClick={() => userEdit(state)}
              >Cancelar
            </button>
              </a>
          </div>
          <div style={{ margin: "3%" }}>
            <a href="/class2">
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


export default ClassContentComponent;
