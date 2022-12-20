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
            <a class="btn btn-lg btn-primary" href="http://localhost:3000/Dashboard#" role="button">Link</a>
            <button type="button" class="btn btn-lg btn-primary"
  disabled>Siguiente </button>
        </div>
    </div>
    )
}
export default BotonesComponent;