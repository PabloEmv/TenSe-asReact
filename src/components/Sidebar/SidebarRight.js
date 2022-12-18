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
            <h6 className="nameUserSBR hiddenSBR textSBR">kiara Diaz</h6>
          </div>
          {/* progreso */}
          <div className="container-fluid progress_content">
            {/* ---- */}
            <span className="title_r-navbar hiddenSBR textSBR">Progreso</span>
            {/* ---- */}
            <div className="row">
              {/* icono */}
              <EMobiledataIcon className="col-1 icons-RB" style={{width: "1.5em",
    height: "1.5em"}}/>
              <div className="col hiddenSBR textSBR">
                <div className="row">
                  <span className="col">Vocales</span>
                  <span>Basico</span>
                </div>
              </div>
              <div className="progress col progressSbR hiddenSBR textSBR">
                <div
                  className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-label="Info example"
                  /* style="width: 50%" */
                  aria-valuenow="50"
                  aria-valuemin=""
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SidebarRightComponent;
