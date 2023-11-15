let matriz = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const cuadros = document.getElementsByClassName("casilla");
let running = false; 

async function ActualizarMatriz() {
    for (let i = 0; i < 9; i++) {
        const casilla = cuadros[i];
        if (casilla.querySelector(".cruz-image")) {
            matriz[i] = 1; // Marcado como "X"
        } else if (casilla.querySelector("img")) {
            matriz[i] = 2; // Marcado como "O"
        } else {
            matriz[i] = 0; // vacio
        }
    }
    console.log(matriz);
}


//se hace un evento al boton
const miBoton = document.getElementById("jugador2deBTN");
miBoton.addEventListener("click", async () => {
    if (!running) {
        running = true; //funca funtion
        while (running) {
            await ActualizarMatriz();
            await new Promise(resolve => setTimeout(resolve, 1000)); // Espera  mas o menos  0.1 segundo 
        }
    }
});


ActualizarMatriz();

/*
personas que hicieron este codigo : Emanuel Isa Y  Leandro Rios BAS
*/