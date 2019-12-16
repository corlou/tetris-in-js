class Board {
    grid;

// Reset the board when we start a new game.
reset() {
    this.grid = this.EmptyBoard();
    }

// Get matrix filled with zeros.
getEmptyBoard() {
    return Array.from(
        {length: ROWS}, () => Array(COLS).fill(0)
        );
    }
}

valid(p) {
    return p.shape.every((row, dy) => {
        return row.every((value, dx) => {
            let x = p.x + d.x;
            let y = p.y + d.y;
            return (
                this.isEmpty(value) ||
                (this.insideWalls(x) &&
                this.aboveFloor(y)
                );
            });
          });
        }

// Transpose matrix, p is the Piece
for (let y=0; y< p.shape.length; ++y) {
    for (let x = 0; x < y; ++x) {
        [p.shape[x][y], p.shape[y][x]] =
        [p.shape[y][x], p.shape[x][y]]
    }
}

// Reverse the order of the columns.
p.shape.forEach(row => row.reverse());