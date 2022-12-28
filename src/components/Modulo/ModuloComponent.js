import React from "react";
import "./modulo.css";
const ModuloComponent = () => {
    return (
        <div classname="todo">
            <div classname="modulo1">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button 
                                id="barra"
                                class="accordion-button" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#panelsStayOpen-collapseOne" 
                                aria-expanded="true" 
                                aria-controls="panelsStayOpen-collapseOne">
                                <div classname="color">
                                    <h6>Modulo 1</h6> 
                                    <h4>Vocales</h4>
                                </div>
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
                                        disabled readonly /><br />
                                </a>
                                <a href="./class" >
                                    <input
                                        class="form-control"
                                        type="text"
                                        value="Vocales debiles o cerradas( I, U)"
                                        aria-label="Disabled input example"
                                        disabled readonly /><br />
                                </a>
                                <a href="./class" >
                                    <input
                                        class="form-control"
                                        type="text"
                                        value="Actividad 1 Vocales"
                                        aria-label="Disabled input example"
                                        disabled readonly /><br />
                                </a>
                                <a>
                                <input
                                    class="form-control"
                                    type="text"
                                    placeholder="Actividad 2 Vocales"
                                    aria-label="Disabled input example"
                                    disabled />
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModuloComponent;