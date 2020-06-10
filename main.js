const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

ctx.canvas.width = COL_COUNT * BLOCK_SIZE;
ctx.canvas.height = ROW_COUNT * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();
let piece = new Piece(ctx);
board.piece = piece;

let moves = {
    [KEY.LEFT]: piece => ({...piece, x: piece.x - 1}),
    [KEY.RIGHT]: piece => ({...piece, x: piece.x + 1}),
    [KEY.DOWN]: piece => ({...piece, y: piece.y + 1})
}

function play() {
    board.reset();
    board.draw();

    document.addEventListener("keydown", event => {
        event.preventDefault();

        if (moves[event.code]) {
            let newPiece = moves[event.code](piece);

            if (board.canMovePiece(newPiece)) {
                ctx.clearRect(piece.x - 1, piece.y - 1, 3 * BLOCK_SIZE, 3 * BLOCK_SIZE);
                board.piece.move(newPiece);
            }
        } else if (event.code === KEY.SPACE) {
            ctx.clearRect(piece.x - 1, piece.y - 1, 3 * BLOCK_SIZE, 3 * BLOCK_SIZE);

            let newPiece = moves[KEY.DOWN](piece);
            while (board.canMovePiece(newPiece)) {
                board.piece.move(newPiece);
                newPiece = moves[KEY.DOWN](newPiece);
            }
        }

        board.draw();
    })
}
