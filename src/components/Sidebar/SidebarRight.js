import React from "react";
import ProgressSbRComponent from "./ProgressSBR";
import PendingTaskComponent from "./PendingTask";
import EMobiledataIcon from "@mui/icons-material/EMobiledata";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import AbcIcon from "@mui/icons-material/Abc";

const SidebarRightComponent = () => {
  return (
    <div className="r-navbar" id="nav-bar2">
      <nav className="nav2">
        <div>
          {/* usuario imagen y nombre */}
          <div className="row justify-content-start mb-5 me-5 flex-nowrap text-nowrap">
          <i className="bx bx-user-circle user_img col-1 me-4"></i>
            <h5 className="nameUserSBR col mb-0 mt-2 ms-1">kiara Diaz</h5>
          </div>
          {/* progreso */}
          <div className="container-fluid progress_content mt-4">
            {/* ---- */}
            <h2 className="title_r-navbar hiddenSBR textSBR">Progreso</h2>
            {/* ---- */}
            <div className="row mt-4 mb-4">
              {/* icono */}
              <EMobiledataIcon
                className="col-1 icons-RB bg-primary bg-opacity-75"
                style={{ width: "1.5em", height: "1.5em"}}
              />
              {/* nombre de la lección, nivel de dificultad, porcentaje de avance */}
              <ProgressSbRComponent
                nombreLeccion={"Vocales"}
                nivelLeccion={"Básico"}
                porcentaje={"70"}
              />
              </div>
              {/* ------------------------ */}

              <div className="row mt-4 mb-4">
              {/* icono */}
              <FormatListNumberedIcon
                className="col-1 icons-RB bg-primary bg-opacity-75"
                style={{ width: "1.5em", height: "1.5em" }}
              />
              {/* nombre de la lección, nivel de dificultad, porcentaje de avance */}
              <ProgressSbRComponent
                nombreLeccion={"Números"}
                nivelLeccion={"Básico"}
                porcentaje={"40"}
              />
            </div>

            {/* ------------------------- */}

            <div className="row mt-4 mb-4">
              {/* icono */}
              <AbcIcon
                className="col-1 icons-RB bg-warning bg-opacity-75"
                style={{ width: "1.5em", height: "1.5em" }}
              />
              {/* nombre de la lección, nivel de dificultad, porcentaje de avance */}
              <ProgressSbRComponent
                nombreLeccion={"Abecedario"}
                nivelLeccion={"Intermedio"}
                porcentaje={"5"}
              />
            </div>
            
            {/* ---- */}
            <h2 className="title_r-navbar hiddenSBR textSBR2 text-nowrap mt-5">Tareas Pendientes</h2>
            {/* ---- */}
            
              {/* icono */}
              <div><PendingTaskComponent pendingTaskName={"Actividad Vocales 1"}/>
            <PendingTaskComponent pendingTaskName={"Actividad Vocales 2"}/></div>
            
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SidebarRightComponent;
