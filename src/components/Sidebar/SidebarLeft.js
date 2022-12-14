import React from "react";

const SidebarLeftComponent = () => {
  return (
    <div class="l-navbar" id="nav-bar">
      <nav class="nav">
        <div>
          {/* logo + nombre */}
          <a href="#" class="nav_logo">
            <img src="./img/Logo_TenSeñas.svg" alt="" class="logo_tes" />
            <span class="nav_logo-name">TenSeñas</span>
          </a>
          {/* elementos de la sidebar */}
          <div class="nav_list">
            <a href="#" class="nav_link active">
              <i class="bx bx-grid-alt nav_icon"></i>
              <span class="nav_name">Tablero</span>
            </a>
            <a href="#" class="nav_link">
              <i class="bx bx-folder nav_icon"></i>
              <span class="nav_name">Clases</span>
            </a>
            <a href="#" class="nav_link">
              <i class="bx bx-ghost nav_icon"></i>
              <span class="nav_name">Logros</span>
            </a>
            <a href="#" class="nav_link">
              <i class="bx bx-cog nav_icon"></i>
              <span class="nav_name">Configuración</span>
            </a>
          </div>
        </div>
        {/* cierre de sesion */}
        <div id="log_out">
          <a href="#" class="nav_link">
            <i class="bx bx-log-out nav_icon"></i>
            <span class="nav_name">Cerrar Sesion</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default SidebarLeftComponent;
