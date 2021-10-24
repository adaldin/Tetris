// -------------------------------------------
// CONSTANTES DEL BOARD PRINCIPAL
// -------------------------------------------
const BOARD_WIDTH = 10; //ANCHO EN Nº BLOQUES
const BOARD_HEIGHT = 20; //ALTO EN Nº BLOQUES

// -------------------------------------------
// CONSTANTES DEL BOARD SECUNDARIO
// -------------------------------------------
const BOARD_WIDTH_MINI_BOARD = 4;
const BOARD_HEIGHT_MINI_BOARD = 4;

// -------------------------------------------
// CREACION DEL BOARD
// ------------------------------------------- 

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


// creacion de funcion para generar bloques para meterlos en la última fila
function lastRow() {
    const blockNoDisplay = document.createElement('div');
    blockNoDisplay.classList.add('game__blocks');
    blockNoDisplay.classList.add('taken');
    blockNoDisplay.style.width = '25px';
    blockNoDisplay.style.height = '25px';
    blockNoDisplay.style.display = 'none'; // tienen display none para que no sean visibles en el navegador
    return blockNoDisplay;
}

// creacion de funcion para pintar los bloques creados en lastRow en la última fila
function drawLastRow(clase, ancho) {
    for (let i = 0; i < ancho; i++) {
        document.querySelector(clase).appendChild(lastRow());
    }

}

// creamos la función para pintar los bloques en el board.
function drawBoard(containerClass, width, heigth) {

    for (let i = 0; i < width * heigth; i++) { // uso un for para recorrer todo el contenedor y que se pinten todos los bloques

        document.querySelector(containerClass).appendChild(generateBoardBlock());
    }
}

drawBoard('.game__board', BOARD_WIDTH, BOARD_HEIGHT); //ejecuto la funcion para el container principal 

drawBoard('.next-tetro__board', BOARD_WIDTH_MINI_BOARD, BOARD_HEIGHT_MINI_BOARD); // ejecuto la funcion para rellenar el contenedor de instrucciones

drawLastRow('.game__board', BOARD_WIDTH); // ejecutamos la funcion para pintar la última fila

// -------------------------------------------
// CREACION DE VARIABLES PARA IMPLEMENTAR
// -------------------------------------------

const GRID = document.querySelectorAll('.game__board');

const BOARD = Array.from(document.querySelectorAll('.game__board .game__blocks'));
const MINI_BOARD = Array.from(document.querySelectorAll('.next-tetro__board .game__blocks'))

const SCORE_DISPLAY = document.querySelector('#score__board'); //creacionn de variable para traer el div de puntuación

// -------------------------------------------
// CREACION DE TETROMINOS
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
    [1, BOARD_WIDTH + 1, BOARD_WIDTH * 2 + 1, BOARD_WIDTH * 3 + 1],
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


// CREACION DE ARRAY DE TODAS LAS PIEZAS
const TETROMINOES = [J_TETROMINO, L_TETROMINO, I_TETROMINO, T_TETROMINO, S_TETROMINO, Z_TETROMINO];

//DIFERENCIACION DE PIEZA QUE CAE
let currentPosition = 4;
let currentRotation = 0;

// SELECCION RANDOM DE TETROMINO 
let generateRandomTetrominoe = Math.floor(Math.random() * TETROMINOES.length);

// SELECCION RANDOM DE INDEX DE TETROMINO 
let currentTetromino = TETROMINOES[generateRandomTetrominoe][currentRotation];

// PINTAR TETROMINO SELECCIONADO EN PANTALLA
function drawTetrominoeInMainBoard() {
    //en arr CurrenTetromino aplico for each
    currentTetromino.forEach(index => {
        //para que en cada iteración en la posicion de cada iteracion
        //agregue la clase (opacidad)al div del grid tetromino
        BOARD[currentPosition + index].classList.add('tetromino');
    });
}
drawTetrominoeInMainBoard();

// DESPINTAR DE TETROMINO SELECCIONADO EN PANTALLA
function undrawTetrominoeInMainBoard() {
    currentTetromino.forEach(index => {
        BOARD[currentPosition + index].classList.remove('tetromino');
    })
}

// -------------------------------------------
// CREACION DE MOVIMIENTOS DE TETROMINOS
// -------------------------------------------

//CAIDA DE PIEZAS
// creacion de constante de tiempo de caida de piezas 
const TIMER = setInterval(moveDown, 500);

// CONTROLES CON TECLAS

function control(e) {
    if (e.keyCode === 37) {
        moveLeft()
    } else if (e.keyCode == 38) {
        rotate();
    } else if (e.keyCode === 39) {
        moveRight();
    } else if (e.keyCode === 40)
        moveDown();
}
document.addEventListener('keyup', control);

// MOVER ABAJO
// creacion de funcion callback  moveDown de interval para que bajen
function moveDown() {
    undrawTetrominoeInMainBoard()
    currentPosition += BOARD_WIDTH;
    drawTetrominoeInMainBoard()
    freeze()
}
// CONGELAMIENTO EN ULTIMA LINEA
// creacion de funcion freeze para que cuando toquen el final, frenen
function freeze() {
    if (currentTetromino.some(index => BOARD[currentPosition + index + 10].classList.contains('taken'))) {
        currentTetromino.forEach(i => BOARD[currentPosition + i].classList.add('taken'));

        //hacemos que caiga un nuevo tetromino
        generateRandomTetrominoe = Math.floor(Math.random() * TETROMINOES.length);
        currentTetromino = TETROMINOES[generateRandomTetrominoe][currentRotation];
        currentPosition = 4;
        drawTetrominoeInMainBoard();
    }
}

// MOVER IZQUIERDA
function moveLeft() {
    // despintar tetromino
    undrawTetrominoeInMainBoard()
        // sacar el lado izquierdo (indice 0,10,20,30..) y guardarlo en constante
    const IS_AT_LEFT_EDGE = currentTetromino.some(index => (currentPosition + index) % BOARD_WIDTH === 0);
    // si la posicion no és la de la variable de arriba
    if (!IS_AT_LEFT_EDGE) { currentPosition -= 1 };
    // y si alguna rotación del tetromino no es de los divs 'taken'
    if (currentTetromino.some(index => BOARD[currentPosition + index].classList.contains('taken'))) {
        currentPosition += 1;
    }
    // pintarla hacia la izquierda
    drawTetrominoeInMainBoard();
}

// MOVER DERECHA
function moveRight() {
    undrawTetrominoeInMainBoard()
        // constante si algun indice del tetromino toca la posicion -1 (que es moverse del 0(la primera)a  -1(la última))
    const IS_AT_RIGHT_EDGE = currentTetromino.some(index => (currentPosition + index) % BOARD_WIDTH === BOARD_WIDTH - 1);
    if (!IS_AT_RIGHT_EDGE) {
        currentPosition += 1
    }
    if (currentTetromino.some(index => BOARD[currentPosition + index].classList.contains('taken'))) {
        currentPosition -= 1;
    }
    drawTetrominoeInMainBoard()
}

// MOVER ARRIBA-ROTAR TETROMINO
function rotate() {
    undrawTetrominoeInMainBoard();
    currentRotation++
    if (currentRotation === currentTetromino.length) {
        currentRotation = 0
    } else {
        currentTetromino = TETROMINOES[generateRandomTetrominoe][currentRotation];
    }
    drawTetrominoeInMainBoard()
}