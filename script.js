const casill0 = document.getElementById("cosit0");
const casill1 = document.getElementById("cosit1");
const casill2 = document.getElementById("cosit2");
const casill3 = document.getElementById("cosit3");
const casill4 = document.getElementById("cosit4");
const casill5 = document.getElementById("cosit5");
const casill6 = document.getElementById("cosit6");
const casill7 = document.getElementById("cosit7");
const casill8 = document.getElementById("cosit8");


let turnoX = true; /* se declara una variale para tener un registro de turno
luego se usa una unfuin llamada marcarCasilla, donde  Si turnoX es true,
 es el turno de "X", y si es false, es el turno de "O".
*/
function marcarCasillaX(casilla) {
  const image = document.createElement("img");
  image.src = "/downloads/Cruz - copia.png";
  image.classList.add("cruz-image"); // Nueva clase para la imagen
  casilla.appendChild(image);
}

function marcarCasillaO(casilla) {
  const imageO = document.createElement("img");
  imageO.src = "downloads/circulo - copia.png";
  casilla.appendChild(imageO);
}

function marcarCasilla(casilla) {
  if (!running) {
    const MensajeFinal = document.getElementById("GamerOver");
    MensajeFinal.textContent = `¡ GAMER OVER ! Reinicia la página para jugar de nuevo `
    console.log("El juego ha terminado. Reinicia la página para jugar de nuevo.");
    return;
  }

  let casillasDisponibles = false;
  for (let i = 0; i < matriz.length; i++) {
    if (matriz[i] === 0) {
      casillasDisponibles = true;
      break;
    }
  }

  if (!casillasDisponibles) {
    
    console.log("Empate. No hay más casillas disponibles para hacer clic.");
    running = false;
    return;
  }

  if (!casilla.querySelector('img')) {
    if (turnoX) {
      marcarCasillaX(casilla);
    } else {
      marcarCasillaO(casilla);
    }
    turnoX = !turnoX;
  }

  verificarFinDePartida();
}
function verificarFinDePartida() {
  const lineasGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6]              // Diagonales
  ];

  // Verificar si algún jugador ganó
  for (const linea of lineasGanadoras) {
    const [a, b, c] = linea;
    if (matriz[a] && matriz[a] === matriz[b] && matriz[a] === matriz[c]) {
      const mensajeGanador = document.getElementById("mensajeDelganador");

    mensajeGanador.textContent = `¡ el jugador ${matriz[a]} gana !.`;

      console.log(`¡Fin de la partida! Jugador ${matriz[a]} gana.`);
      running = false;
      return;
    }
  }

  // Verificar empate
  let empate = true;
  for (let i = 0; i < matriz.length; i++) {
    if (matriz[i] === 0) {
      empate = false;
      break;
    }
  }

  if (empate) {
    const mensajeDeEmpate = document.getElementById("mensajeDeEmpate");

    mensajeDeEmpate.textContent = `¡Empate! No hay más casillas disponibles.`;
    console.log("¡Empate! No hay más casillas disponibles.");
    running = false;
  }
}




casill0.addEventListener("click", function () {
  marcarCasilla(casill0);
});

casill1.addEventListener("click", function () {
  marcarCasilla(casill1);
});

casill2.addEventListener("click", function () {
  marcarCasilla(casill2);
});

casill3.addEventListener("click", function () {
  marcarCasilla(casill3);
});

casill4.addEventListener("click", function () {
  marcarCasilla(casill4);
});

casill5.addEventListener("click", function () {
  marcarCasilla(casill5);
});

casill6.addEventListener("click", function () {
  marcarCasilla(casill6);
});

casill7.addEventListener("click", function () {
  marcarCasilla(casill7);
});

casill8.addEventListener("click", function () {
  marcarCasilla(casill8);
});

/*
personas que hicieron este codigo : Emanuel Isa, Franco Racca y Leandro Rios BAS
*/