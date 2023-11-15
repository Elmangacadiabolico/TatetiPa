document.addEventListener("DOMContentLoaded", function() {
  const modalJugador1 = document.getElementById("jugador1");
  modalJugador1.style.display = "block";
  /*
  const tableroPepe = document.getElementById("TableroPepe");
  tableroPepe.style.display = "none"; 
  */
});

document.getElementById("jugador1deBTN").addEventListener("click", function() {
  const modalJugador1 = document.getElementById("jugador1");
  modalJugador1.style.display = "none";  

  const modalJugador2 = document.getElementById("jugador2");
  modalJugador2.style.display = "block";  
});

document.getElementById("jugador2deBTN").addEventListener("click", function() {
  const modalJugador2 = document.getElementById("jugador2");
  modalJugador2.style.display = "none";  
  /*
  const tableroPepe = document.getElementById("TableroPepe");
  tableroPepe.style.display = "block"; 
  */
});


 





/*
personas que hicieron este codigo :  Franco Racca
*/