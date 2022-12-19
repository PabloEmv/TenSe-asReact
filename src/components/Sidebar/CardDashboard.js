import React from "react";

const CardDashboardComponent = ({imagen, alt, titulo, nLecciones, duracion}) => {
  return (
    <div>
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