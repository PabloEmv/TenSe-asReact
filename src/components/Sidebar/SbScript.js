

      document.addEventListener("DOMContentLoaded", function (event) {
        // traemos obtenemos los id de los sig elementos y los guardamos en constantes
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId),
          bodypd = document.getElementById(bodyId),
          headerpd = document.getElementById(headerId);
    
        // Valida que todas las variables existen
        if (toggle && nav && bodypd && headerpd) {
          // cuando se presiona el boton de la sidebar izquierda ocurre esto
          toggle.addEventListener("click", () => {
            //classlist le agreaga la clase al elemento
            // change icon
            toggle.classList.toggle('bx-x')
            // muestra la navbar
            nav.classList.toggle("show");
            // agrega padding al body
            bodypd.classList.toggle("body-pd");
            // agrega padding al header
            headerpd.classList.toggle("body-pd");
          });
        }
      };
      // llamamos a la función y agregamos los parametros
      showNavbar("header-toggle", "nav-bar", "body-pd", "header");
    
      const showNavbar2 = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId),
          bodypd = document.getElementById(bodyId),
          headerpd = document.getElementById(headerId);
    
        if (toggle && nav && bodypd && headerpd) {
          // cuando se presiona el boton de la sidebar izquierda ocurre esto
          toggle.addEventListener("click", () => {
            //classlist le agreaga la clase al elemento
            toggle.classList.toggle('bx-x2')
            // muestra la navbar
            nav.classList.toggle("show2");
            // agrega padding al body
            bodypd.classList.toggle("body-pd2");
            // agrega padding al header
          });
        }
      };
      showNavbar2("header-toggle2", "nav-bar2", "body-pd", "header");
    
    
      /*===== LINK ACTIVE =====*/
      // selecciona todos los elementos con la clade nav_link
      const linkColor = document.querySelectorAll(".nav_link");
    
    
      function colorLink() {
        if (linkColor) {
          // primero removemos la clase active
          linkColor.forEach((l) => l.classList.remove("active"));
          // luego agregamos esta clase al nav_link que esté activo
          this.classList.add("active");
        }
      }
      // esto hace que esté pendiente a que se presione algun nav_link, y si sucede llama a la función colorLink
      linkColor.forEach((l) => l.addEventListener("click", colorLink));
    
      // esto previene que se abra en enlace de algun atributo con href vacio
    var myLink = document.querySelector('a[href="#"]');
    myLink.addEventListener("click", function (e) {
      e.preventDefault();
    });
    
    
    /* animated left button sidebar */
    
    $(document).ready(function(){
        $('.nav-icon').click(function(){
            $(this).toggleClass('open');
        });
    });
    
    /* animated right button sidebar */
    $( ".arrow-icon" ).click(function() {
      $(this).toggleClass("open");
    });
      });
   
  