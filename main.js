const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const canvasNext = document.getElementById('next');
const ctxNext = canvasNext.getContext('2d');

// Calculate size of canvas from constants.
//ctx.canvas.width = COLS * BLOCK_SIZE;
//ctx.canvas.height = ROWS * BLOCK_SIZE;


// Scale blocks

//ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();

function play() {
  board.reset();
  console.table(board.grid);
}

function play() {
  board = getEmptyBoard();
  let piece = new Piece(ctx);
  piece.draw();
  
  board.piece = piece;
}

moves = {
    [KEY.LEFT]: p => ({ ...p, x: p.x - 1 }),
    [KEY.RIGHT]: p => ({ ...p, x: p.x + 1}),
    [KEY.UP]: p => ({ ...p, y: p.y + 1})
};

document.addEventListener('keydown', event => {
    if (moves[event.keyCode]){
        // Stop the event from bubbling.
        event.preventDefault();

        // Get new state of piece
        let p = moves[event.keyCode] (board.piece);

        if (board.valid(p)) {
            // If the move is valid, move the piece
            board.piece.move(p);

            // Clear old position before drawing.
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            board.piece.draw();
        }
        
    }


const KEY = {
    SPACE: 32,
    // ...
}

moves = {
    [KEY.SPACE]: p => ({ ...p, y: p.y + 1})
    // ...
};

// In EventListener
if (event.keyCode === KEY.SPACE) {
    // Hard drop
    while (board.valid(p)) {
        board.piece.move(p);
        p = moves[KEY.DOWN] (board.piece);
    }
}


});