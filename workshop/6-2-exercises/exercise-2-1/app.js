// Exercise 2.1 - The GRID
// ------------

// Create a game board.
// The CSS will, for the most part, take care of itself
// as long as you assign the right classes to the cells.

// Objectives
// - set the size of the board to a square of 600px;
// - set a number of cells per row;
// - the cells should all be square.
// - cells should have a class of 'cell'
// - cells should have and id of 'cell-#'


// - set the size of the board to a square of 600px;✅
let boardSize = 600;

// - set a number of cells per row and column; ✅
let rows = 10;
let columns = 10;

let board = document.getElementById("board");

board.style.height = `${boardSize}px`;
board.style.width = `${boardSize}px`;

// - the cells should all be square✅
// it will make a grid of rows *  columns (set to 5*5) and and equally space all the squares into equal fractions regardless of board size

board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

//creates divs with class 'cell' and id 'cell-#' then appends the newly created cell with all its properties
for (let cellNum = 0; cellNum < (rows * columns); cellNum++) {
  //for every cell created, create a div
  let cell = document.createElement("div");
  //creates an id named 'cell-${cellNum (in the forloop)}'
  cell.id = `cell-${cellNum}`;
  //creates a class named 'cell' for easier css targeting
  cell.classList.add("cell");
  //appends the child into the
  board.appendChild(cell);
}
