class Board {
    grid;

    reset() {
        this.grid = this.getEmptyBoard();
    }

    getEmptyBoard() {
        return Array.from(
            { length: ROW_COUNT }, () => Array(COL_COUNT).fill(0)
        )
    }
}