
import logoTes from '../../assets/img/Logo_TenSeñas.svg'
const SidebarLeftComponent = () => {
  
  return (
    <div className="l-navbar" id="nav-bar">
      <nav className="navSB">
        <div>
          {/* logo + nombre */}
          <a href="./Dashboard" className="nav_logo">
            <img src={logoTes} alt="" className="logo_tes" />
            <span className="nav_logo-name">TenSeñas</span>
          </a>
          {/* elementos de la sidebar */}
          <div className="nav_list">
            <a href="./Dashboard" className="nav_link active">
              <i className="bx bx-grid-alt nav_icon"></i>
              <span className="nav_name">Tablero</span>
            </a>
            <a href="./modulo" className="nav_link modulo_nav">
              <i className="bx bx-folder nav_icon"></i>
              <span className="nav_name">Clases</span>
            </a>
            <a href="/Achievements" className="nav_link achievement_nav">
              <i className="bx bx-ghost nav_icon"></i>
              <span className="nav_name">Logros</span>
            </a>
            <a href="./Config" className="nav_link config_nav">
              <i className="bx bx-cog nav_icon"></i>
              <span className="nav_name">Configuración</span>
            </a>
          </div>
        </div>
        {/* cierre de sesion */}
        <div id="log_out">
          <a href="/iniciarSesion" className="nav_link">
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">Cerrar Sesion</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default SidebarLeftComponent;
