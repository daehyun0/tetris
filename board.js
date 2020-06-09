class Board {
    grid;
    piece;

    draw() {
        this.piece.draw();
    }

    reset() {
        this.grid = this.getEmptyBoard();
    }

    getEmptyBoard() {
        return Array.from(
            { length: ROW_COUNT }, () => Array(COL_COUNT).fill(0)
        )
    }
}