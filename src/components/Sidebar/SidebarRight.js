import React from "react";
import EMobiledataIcon from '@mui/icons-material/EMobiledata';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AbcIcon from '@mui/icons-material/Abc';


const SidebarRightComponent = () => {
  return (
    <div className="r-navbar" id="nav-bar2">
      <nav className="nav2">
        <div>
          {/* usuario imagen y nombre */}
          <div className="d-inline">
            <i className="bx bx-user-circle user_img d-inline"></i>
            <h5 className="nameUserSBR">kiara Diaz</h5>
          </div>
          {/* progreso */}
          <div className="container-fluid progress_content mt-4">
            {/* ---- */}
            <h2 className="title_r-navbar hiddenSBR textSBR">Progreso</h2>
            {/* ---- */}
            <div className="row mt-3">
              {/* icono */}
              <EMobiledataIcon className="col-1 icons-RB" style={{width: "1.5em",
    height: "1.5em"}}/>
              <div className="position-absolute"><div className="col-4">
                <div className="row ml-5">
                  <span className="col fs-6">Vocales</span>
                  <span>Basico</span>
                </div>
              </div>
              <div className="progress col progressSbR mt-4">
                <div
                  className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-label="Info example"
                  style={{width: "50%"}}
                  aria-valuenow="50"
                  aria-valuemin=""
                  aria-valuemax="100"
                ></div>
              </div></div>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SidebarRightComponent;
