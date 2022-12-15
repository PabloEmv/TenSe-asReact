import React from "react";
import EMobiledataIcon from '@mui/icons-material/EMobiledata';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AbcIcon from '@mui/icons-material/Abc';


const SidebarRightComponent = () => {
  return (
    <div className="r-navbar" id="nav-bar2">
      <nav className="nav2">
        <div>
          <div>
            <i className="bx bx-user-circle user_img"></i>
            <h6>kiara Diaz</h6>
          </div>
          <div className="container-fluid progress_content">
            <span className="title_r-navbar">Progreso</span>
            <div className="row">
              <div className="col icons-RB"><EMobiledataIcon/></div>
              <div className="col">
                <div className="row">
                  <span className="col">Vocales</span>
                  <span>Basico</span>
                </div>
              </div>
              <div className="progress col progressSbR">
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
