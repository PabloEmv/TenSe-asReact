import React from "react";
import vocales from "../../assets/img/vocales_img.png";

const DashboardContentComponent = () => {
  return (
    <div className="tablero container">
      <div class="card">
        <img src={vocales} class="card-img" alt="vocales" />
        <div class="card-img-overlay" style={{padding:"0 0 0 0"}}>
          <div className="titleDashboardItems position-relative" style={{padding:"25px 0 4px 25px"}}>
            <h3 class="card-title">Vocales</h3>
            <h6 class="card-text">5 lecciones</h6>
            <h6 class="card-text">
              <p className="position-absolute bottom-0 end-0 me-3 mb-2">30 min</p>
            </h6>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col"><div class="card">
        <img src={vocales} class="card-img" alt="vocales" />
        <div class="card-img-overlay" style={{padding:"0 0 0 0"}}>
          <div className="titleDashboardItems position-relative" style={{padding:"25px 0 4px 25px"}}>
            <h2 class="card-title">Tablero</h2>
            <h5 class="card-text">5 lecciones</h5>
            <h5 class="card-text">
              <p className="position-absolute bottom-0 end-0 me-3 mb-2">30 min</p>
            </h5>
          </div>
        </div>
      </div></div>
        <div className="col"><div class="card">
        <img src={vocales} class="card-img" alt="vocales" />
        <div class="card-img-overlay" style={{padding:"0 0 0 0"}}>
          <div className="titleDashboardItems position-relative" style={{padding:"25px 0 4px 25px"}}>
            <h2 class="card-title">Tablero</h2>
            <h5 class="card-text">5 lecciones</h5>
            <h5 class="card-text">
              <p className="position-absolute bottom-0 end-0 me-3 mb-2">30 min</p>
            </h5>
          </div>
        </div>
      </div></div>
      </div>
    </div>
  );
};

export default DashboardContentComponent;
