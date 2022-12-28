export const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    const bodypd = document.getElementById(bodyId);
    const headerpd = document.getElementById(headerId);
  
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        toggle.classList.toggle("bx-x");
        toggle.classList.toggle("open");
        nav.classList.toggle("show0");
        bodypd.classList.toggle("body-pd");
        headerpd.classList.toggle("body-pd");
      });
    }
  };
  
  export const showNavbar2 = (toggleId, navId, bodyId, headerId, textSBR, textSBR2) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    const bodypd = document.getElementById(bodyId);
    const headerpd = document.getElementById(headerId);
    const hidden = document.querySelector(textSBR);
    const hidden2 = document.querySelector(textSBR2);
  
    if (toggle && nav && bodypd && headerpd && hidden) {
      toggle.addEventListener("click", () => {
        toggle.classList.toggle("bx-x2");
        toggle.classList.toggle("open");
        nav.classList.toggle("show2");
        bodypd.classList.toggle("body-pd2");
        hidden.classList.toggle("hiddenSBR");
        hidden2.classList.toggle("hiddenSBR");
  
      });
    }
  };