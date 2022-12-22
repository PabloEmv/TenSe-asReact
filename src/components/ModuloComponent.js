import React from "react";
import "./modulo.css";
const ModuloComponent = () => {
    return (
        <div classname="todo">
            <div classname="modulo1">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                <h6>Modulo 1</h6> <br></br>
                                <h4>Vocales</h4>
                            </button>
                        </h2>
                        <div 
                            id="panelsStayOpen-collapseOne" 
                            class="accordion-collapse collapse show" 
                            aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                <a href="./class" >
                                    <input 
                                        class="form-control" 
                                        type="text" 
                                        value="Vocales fuertes o abiertas (A, E, O)"
                                        aria-label="Disabled input example" 
                                        disabled readonly/><br/>
                                </a>
                                <input 
                                    class="form-control" 
                                    type="text" 
                                    placeholder="Vocales debiles o cerradas( I, U)" 
                                    aria-label="Disabled input example" 
                                    disabled/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}
            export default ModuloComponent;