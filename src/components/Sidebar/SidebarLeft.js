import React, { useState, useEffect } from 'react';

const SidebarLeftComponent = () => {
  
  const [linkColor, setLinkColor] = useState([]);

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav_link');
    setLinkColor(navLinks);
  }, []);

  function colorLink() {
    if (linkColor.length > 0) {
      linkColor.forEach((l) => l.classList.remove('active'));
      this.classList.add('active');
    }
  }

  useEffect(() => {
    if (linkColor.length > 0) {
      linkColor.forEach((l) => l.addEventListener('click', colorLink));
    }
  }, [linkColor]);

  return (
    <div className="l-navbar" id="nav-bar">
      <nav className="nav">
        <div>
          {/* logo + nombre */}
          <a href="#" className="nav_logo">
            <img src="./img/Logo_TenSeñas.svg" alt="" className="logo_tes" />
            <span className="nav_logo-name">TenSeñas</span>
          </a>
          {/* elementos de la sidebar */}
          <div className="nav_list">
            <a href="#" className="nav_link active">
              <i className="bx bx-grid-alt nav_icon"></i>
              <span className="nav_name">Tablero</span>
            </a>
            <a href="#" className="nav_link">
              <i className="bx bx-folder nav_icon"></i>
              <span className="nav_name">Clases</span>
            </a>
            <a href="#" className="nav_link">
              <i className="bx bx-ghost nav_icon"></i>
              <span className="nav_name">Logros</span>
            </a>
            <a href="#" className="nav_link">
              <i className="bx bx-cog nav_icon"></i>
              <span className="nav_name">Configuración</span>
            </a>
          </div>
        </div>
        {/* cierre de sesion */}
        <div id="log_out">
          <a href="#" className="nav_link">
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">Cerrar Sesion</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default SidebarLeftComponent;
