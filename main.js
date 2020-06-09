const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

ctx.canvas.width = COL_COUNT * BLOCK_SIZE;
ctx.canvas.height = ROW_COUNT * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();

function play() {
    board.reset();
    console.table(board.grid)
}

