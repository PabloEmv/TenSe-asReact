import React from "react";
import senalU from "./img/o 3.png"

const Actividad1Component =({imagen, alt, titulo, duracion}) =>{
    return(
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src= {senalU} alt="Card image cap"/>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
     
    )
}    
export default Actividad1Component; 


/*<div>
      <div class="card">
        <img src={imagen} class="card-img" alt={alt} />
        <div class="card-img-overlay" style={{ padding: "0 0 0 0" }}>
          <div
            className="titleDashboardItems position-relative"
            style={{ padding: "25px 0 4px 25px" }}
          >
            <h3 class="card-title">{titulo}</h3>
            <h6 class="card-text">{nLecciones} lecciones</h6>
            <h6 class="card-text">
              <p className="position-absolute bottom-0 end-0 me-3 mb-2">
                {duracion}
              </p>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDashboardComponent
<div className="col"><CardDashboardComponent imagen={numeros} alt={"numeros"} titulo={"Numeros"} nLecciones={"8"} duracion={"45 m"}/><div class="card" /></div>
*/