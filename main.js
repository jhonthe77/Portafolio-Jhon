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