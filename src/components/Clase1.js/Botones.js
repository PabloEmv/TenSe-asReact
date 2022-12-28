import React from "react";
import DashboardContentComponent from "../Sidebar/DashboardContent";

const BotonesComponent= ({hand}) => {
    return(
        <div class="container">
           <div>
            </div>
            <br/>
            <br/>
            <div class="d-flex justify-content-between">
            <button id="BT1" type="button" class="btn btn-lg btn-primary" disabled>Anterior </button>
            <a class="btn btn-lg btn-primary" href="http://localhost:3000/class2" role="button">
            <button type="button"  class="btn btn-lg btn-primary">Siguiente </button></a>
        </div>
    </div>
    )
}
export default BotonesComponent;