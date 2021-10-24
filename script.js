// -------------------------------------------
// CREACION DEL BOARD PRINCIPAL Y SECUNDARIO
// -------------------------------------------
// creación variables del ancho y alto del tablero
// Los valores que le he puesto son los que nos ha dicho Alex en las instrucciones
const BOARD_WIDTH = 10; //ANCHO EN Nº BLOQUES
const BOARD_HEIGHT = 20; //ALTO EN Nº BLOQUES



// Creo función para crear un bloque
function generateBoardBlock() {
    // creo div
    const bloque = document.createElement('div');
    // anñado clase del css (ver CSS section bloques/game__blocks)
    bloque.classList.add('game__blocks');
    // este div lo creo para incluirlo dentro de bloque más grande
    const bloqueInterior = document.createElement('div');
    // anñado clase del css (ver section bloques/game__blocks--interior)
    bloqueInterior.classList.add('game__blocks--interior');
    // al bloque padre le inyecto el bloque interior
    bloque.appendChild(bloqueInterior);
    // al bloque padre le doy estilo (ancho y alto)
    bloque.style.width = '25px';
    bloque.style.height = '25px';
    // devuelvo bloque
    return bloque;
}

// creamos la función para pintar los bloques en el board.
function drawBoard(containerClass, width, heigth) {
    // uso un for para recorrer todo el contenedor y que se pinten todos los bloques
    for (let i = 0; i < width * heigth; i++) {

        document.querySelector(containerClass).appendChild(generateBoardBlock());
    }
}
//ejecuto función que genera dentro del contenedor definido en 
// '.game__board' (string) todos los bloques de hijos necesarios para
// cumplir BOARD_WIDTH (number) y BOARD_HEIGHT (number).
drawBoard('.game__board', BOARD_WIDTH, BOARD_HEIGHT);
// ejecuto la funcion para rellenar instrucciones (ver CSS section aside/.next-tetro__board )
drawBoard('.next-tetro__board', 4, 4);

// -------------------------------------------
// CREACION DE VARIABLES PARA IMPLEMENTAR
// -------------------------------------------
// creación de variable para seleccionar y traer board del index
const GRID = document.querySelectorAll('.game__board');
// creación de variable para seleccionar y traer cuadraditos hijos del board
//con Array() cada div tendrá un específico index 
const BOARD = Array(document.querySelectorAll('.game__board .game__blocks'));
const MINI_BOARD = Array.from(document.querySelectorAll('.next-tetro__board .game__blocks'))
    //creacionn de variable para traer el div de puntuación
const SCORE_DISPLAY = document.querySelector('#score__board');
// creacion de variable para traer boton start
const START_BTN = document.querySelector('start-button');

// -------------------------------------------
// CREACION DE PIEZAS L - J
// -------------------------------------------
const J_TETROMINO = [
    //ROTACION 0  
    [1, BOARD_WIDTH + 1, BOARD_WIDTH * 2 + 1, 2],
    //ROTACION 1 
    [BOARD_WIDTH, BOARD_WIDTH + 1, BOARD_WIDTH + 2, BOARD_WIDTH * 2 + 2],
    //ROTACION ·2
    [1, BOARD_WIDTH + 1, BOARD_WIDTH * 2 + 1, BOARD_WIDTH * 2],
    //ROTACION 3
    [BOARD_WIDTH, BOARD_WIDTH * 2, BOARD_WIDTH * 2 + 1, BOARD_WIDTH * 2 + 2]
];
const L_TETROMINO = [
    //ROTACION 0  
    [1, 2, BOARD_WIDTH + 2, BOARD_WIDTH * 2 + 2],
    //ROTACION 1 
    [BOARD_WIDTH, BOARD_WIDTH + 1, BOARD_WIDTH + 2, BOARD_WIDTH * 2],
    //ROTACION ·2
    [1, BOARD_WIDTH + 1, BOARD_WIDTH * 2 + 1, BOARD_WIDTH * 2 + 2],
    //ROTACION 3
    [BOARD_WIDTH + 2, BOARD_WIDTH * 2, BOARD_WIDTH * 2 + 1, BOARD_WIDTH * 2 + 2]
];
const I_TETROMINO = [
    [1, BOARD_WIDTH + 1, BOARD_WIDTH * 2 + 1, BOARD_WIDTH * 3 + 1],
    [BOARD_WIDTH, BOARD_WIDTH + 1, BOARD_WIDTH + 2, BOARD_WIDTH + 3],
    [1, BOARD_WIDTH + 1, BOARD_WIDTHh + 2, BOARD_WIDTH * 3 + 1],
    [BOARD_WIDTH, BOARD_WIDTH + 1, BOARD_WIDTH + 2, BOARD_WIDTH + 3]
];
const T_TETROMINO = [
    [1, BOARD_WIDTH, BOARD_WIDTH + 1, BOARD_WIDTH + 2],
    [1, BOARD_WIDTH + 1, BOARD_WIDTH + 2, BOARD_WIDTH * 2 + 1],
    [BOARD_WIDTH, BOARD_WIDTH + 1, BOARD_WIDTH + 2, BOARD_WIDTH * 2 + 1],
    [1, BOARD_WIDTH, BOARD_WIDTH + 1, BOARD_WIDTH * 2 + 1]
];
const Z_TETROMINO = [
    [0, 1, BOARD_WIDTH + 1, BOARD_WIDTH + 2],
    [2, BOARD_WIDTH + 1, BOARD_WIDTH + 2, BOARD_WIDTH * 2 + 1],
    [BOARD_WIDTH, BOARD_WIDTH + 1, BOARD_WIDTH * 2 + 1, BOARD_WIDTH * 2 + 2],
    [1, BOARD_WIDTH, BOARD_WIDTH + 1, BOARD_WIDTH * 2]
];


const S_TETROMINO = [
    [1, 2, BOARD_WIDTH, BOARD_WIDTH + 1],
    [0, BOARD_WIDTH, BOARD_WIDTH + 1, BOARD_WIDTH * 2 + 1],
    [BOARD_WIDTH + 1, BOARD_WIDTH + 2, BOARD_WIDTH * 2, BOARD_WIDTH * 2 + 1],
    [1, BOARD_WIDTH + 1, BOARD_WIDTH + 2, BOARD_WIDTH * 2 + 2]
];


// AGRUPACION DE TODAS LAS PIEZAS
const TETROMINOES = [J_TETROMINO, L_TETROMINO, I_TETROMINO, T_TETROMINO, S_TETROMINO, Z_TETROMINO];