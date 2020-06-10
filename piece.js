class Piece {
    x;
    y;
    color;
    shape;
    ctx;

    constructor() {
        this.ctx = ctx;
        this.spawn();
    }

    spawn() {
        this.color = "blue";
        this.shape = [
            [2, 0, 0],
            [2, 2, 2],
            [0, 0, 0]
        ]

        this.x = 3;
        this.y = 0;
    }

    move (p) {
        this.x = p.x;
        this.y = p.y;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }
            })
        })
    }

    rotate() {
        for (let i = 0; i < this.shape.length; i++) {
            for (let j = 0; j < i; j++) {
                [this.shape[i][j], this.shape[j][i]] = [this.shape[j][i], this.shape[i][j]]
            }
        }

        this.shape.forEach(row => row.reverse());
    }
}