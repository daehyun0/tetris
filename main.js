const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

ctx.canvas.width = COL_COUNT * BLOCK_SIZE;
ctx.canvas.height = ROW_COUNT * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();
let moves = {
    [KEY.LEFT]: piece => ({...piece, x: piece.x - 1}),
    [KEY.RIGHT]: piece => ({...piece, x: piece.x + 1}),
    [KEY.DOWN]: piece => ({...piece, y: piece.y + 1})
}


function play() {
    board.reset();
    let piece = new Piece(ctx);
    board.piece = piece;

    document.addEventListener("keydown", event => {
        if (moves[event.key]) {
            event.preventDefault();

            ctx.clearRect(piece.x - 1, piece.y - 1, 3 * BLOCK_SIZE, 3 * BLOCK_SIZE);

            let newPiece = moves[event.key](piece);
            board.piece.move(newPiece);
            board.draw();
        }
    })
}
