// creación variables del ancho y alto del tablero
// Los valores que le he puesto son los que nos ha dicho Alex en las instrucciones
const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;




// Creo función para crear un bloque
function generateBoardBlock() {

    const bloque = document.createElement('div');
    bloque.classList.add('game__blocks');
    const bloqueInterior = document.createElement('div'); // este div lo creo para incluirlo dentro de bloque más grande
    bloqueInterior.classList.add('game__blocks--interior');
    bloque.appendChild(bloqueInterior);
    bloque.style.width = '25px';
    bloque.style.height = '25px';
    return bloque;
}

// creamos la función para pintar los bloques en el board.
function drawBoard(containerClass, width, heigth) {

    for (let i = 0; i < width * heigth; i++) { // uso un for para recorrer todo el contenedor y que se pinten todos los bloques

        document.querySelector(containerClass).appendChild(generateBoardBlock());
    }
}

drawBoard('.game__board', BOARD_WIDTH, BOARD_HEIGHT); //ejecuto la funcion para el container principal 

drawBoard('.next-tetro__board', 4, 4); // ejecuto la funcion para rellenar el contenedor de instrucciones