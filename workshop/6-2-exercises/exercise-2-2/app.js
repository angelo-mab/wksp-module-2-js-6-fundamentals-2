// Exercise 2.2 - the Custom Grid
// ------------

// Use the grid code you wrote in 2.1

// Objectives
// Allow the user to create cells on the board based on values he/she inputs.
// - Ask the user the number of ROWS and COLUMNS
// - Use those values to generate a grid

// Hints
// - use the 'blur' event
// - one event listener per input

// If you need extra hints, see somebody... :)


//take the id from the html provided and assigns them to the board, rowInput and comlumnInput
let board = document.getElementById("board");
let rowsInput = document.getElementById("rows-input");
let columnInput = document.getElementById("columns-input");


// sets the board size to 600 and initializes the rows and columns to 0
let boardSize = 600;
let rows;
let columns;

// sets the board width and height to be a square provided by the boardsize
board.style.height = board.style.width = `${boardSize}px`;

// a creates all the squares in the grid according to the specs that the user has inputed
renderboard = () => {
  if (rows > 0 && columns > 0) {
    board.innerHTML = "";

    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    for (let cellNum = 0; cellNum < rows * columns; cellNum++) {
      let cell = document.createElement("div");
      cell.id = `cell-${cellNum}`;
      cell.classList.add("cell");
      cell.appendChild(cell);
    }
  }
};

// sets the value of rows to the value from the target
handleRows = event => {
  rows = event.target.value;
  renderBoard();
};

// sets the value of columns to the value from the target
handleCol = event => {
  columns = event.target.value;
  renderBoard();
};

// adds the event listener to the script.
rowsInput.addEventListener("blur", handleRows);
columnsInput.addEventListener("blur", handleCol);
