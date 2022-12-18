import React from "react";
import vocales from "../../assets/img/vocales_img.png";

const DashboardContentComponent = () => {
  return (
    <div className="tablero">
      <div class="card">
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
      </div>

      <div className="row">
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
