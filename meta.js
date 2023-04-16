function cambioColor(){
    let temas = document.getElementById("body");
    temas.classList.toggle("bodyoscuro")
}

let dropdownBtn = document.querySelector(".dropdown-btn");
let dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", function() {
  dropdownContent.classList.toggle("show");
});

window.addEventListener("click", function(event) {
  if (!event.target.matches(".dropdown-btn")) {
    let dropdowns = document.querySelectorAll(".dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
});
const btnAbrir = document.getElementById('btn-panel');
const btnCerrar = document.getElementById('btn-cerrar');
const panel = document.getElementById('panel');

btnAbrir.addEventListener('click', () => {
  panel.style.display = 'block';
});

btnCerrar.addEventListener('click', () => {
  panel.style.display = 'none';
});



window.addEventListener("load", function () {
        document.getElementById("contenedor").style.display = "block";
      });

      // Cerrar el contenedor al hacer clic en el botón de cerrar
      document.getElementById("cerrar").addEventListener("click", function () {
        document.getElementById("contenedor").style.display = "none";
      });
      function cerrar2() {
        document.getElementById("notification").style.display = "none";
      }
      
      function info() {
        var elemento = document.getElementById("info-claps");
        if (elemento.style.display === "none") {
          elemento.style.display = "block";
        } else {
          elemento.style.display = "none";
        }
      }

      function info2() {
        var elemento = document.getElementById("info-gain");
        if (elemento.style.display === "none") {
          elemento.style.display = "block";
        } else {
          elemento.style.display = "none";
        }
      }

      function info3() {
        var elemento = document.getElementById("info-sweatcoin");
        if (elemento.style.display === "none") {
          elemento.style.display = "block";
        } else {
          elemento.style.display = "none";
        }
      }