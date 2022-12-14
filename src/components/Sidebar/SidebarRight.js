import React from "react";

const SidebarRightComponent = () => {
  return (
    <div class="r-navbar" id="nav-bar2">
      <nav class="nav2">
        <div>
          <div>
            <i class="bx bx-user-circle user_img"></i>
            <h6>kiara Diaz</h6>
          </div>
          <div class="container-fluid progress_content">
            <span class="title_r-navbar">Progreso</span>
            <div class="row">
              {/* <div class="col"></div> */}
              <div class="col">
                <div class="row">
                  <span class="col">Vocales</span>
                  <span>Basico</span>
                </div>
              </div>
              <div class="progress col progressSbR">
                <div
                  class="progress-bar bg-info progress-bar-striped progress-bar-animated"
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
