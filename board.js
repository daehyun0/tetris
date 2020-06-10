class Board {
    grid;
    piece;

    draw() {
        this.piece.draw();
    }

    reset() {
        this.grid = this.getEmptyBoard();
    }

    canMovePiece(piece) {
        function isXposInsideWall(x) { return  (0 <= x && x < COL_COUNT) }
        function isYposInsideFloor(y) { return y < ROW_COUNT }

        return piece.shape.every((row, dy) => {
            return row.every((value, dx) => {
                let x = piece.x + dx;
                let y = piece.y + dy;

                return value === 0 ||
                    (isXposInsideWall(x) && isYposInsideFloor(y));
            })
        })
    }

    getEmptyBoard() {
        return Array.from(
            { length: ROW_COUNT }, () => Array(COL_COUNT).fill(0)
        )
    }
}