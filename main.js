let menuVisble = false;

function MostrarOcultarMenu(menuVisble) {
  if (menuVisble) {
    document.getElementById("nav").classList = "";
    menuVisble = false;
  }
  document.getElementById("nav").classList = "responsive";
  menuVisble = true;
}

function selecionar() {
  document.getElementById("nav").classList = "";
  menuVisble = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  let habilidadesProgreso = [
    "java",
    "python",
    "javascript",
    "html-css",
    "express",
    "mysql",
    "liderasgo",
    "liderasgo",
    "html-css",
    "html-css",
    "liderasgo",
    "liderasgo",
  ];
  let skills = document.getElementById("skills");
  let distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    for (var i = 0; i < habilidades.length; i++) {
      habilidades[i].classList.add(habilidadesProgreso[i]);
    }
    
  }
}

window.onscroll = function () {
  efectoHabilidades();
};


  function descargarCurriculum() {
    const fileUrl = "assets/JhonKerlymosqueracv.pdf"; // Ruta al archivo PDF
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank';
    link.download = "JhonKerlymosqueracv.pdf"; // Nombre de archivo para descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };