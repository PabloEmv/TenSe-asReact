import React from "react";

const BtnSidebarLComponent = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('idDelElemento');
    element.classList.toggle('bx-x');
  }
  
  return (
    <div class="header_toggle">
      <div id="header-toggle" class="nav-icon" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default BtnSidebarLComponent;
