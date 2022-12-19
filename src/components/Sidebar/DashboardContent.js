import React from "react";
import CardDashboardComponent from "./CardDashboard";
import vocales from "../../assets/img/vocales_img.png";
import numeros from "../../assets/img/numeros.png";
import abcdario from "../../assets/img/abcdario.png";

const DashboardContentComponent = () => {
  return (
    <div className="tablero container">
      <CardDashboardComponent imagen={vocales} alt={"vocales"} titulo={"Vocales"} nLecciones={"5"} duracion={"30 m"}/>

      <div className="row mt-3">
        <div className="col"><CardDashboardComponent imagen={numeros} alt={"numeros"} titulo={"Numeros"} nLecciones={"8"} duracion={"45 m"}/><div class="card" /></div>
        <div className="col"><CardDashboardComponent imagen={abcdario} alt={"abcdario"} titulo={"Abecedario"} nLecciones={"10"} duracion={"1 h"}/><div class="card" /></div>
      </div>
    </div>
  );
};

export default DashboardContentComponent;
