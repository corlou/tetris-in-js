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

function animate(now = 0) {
    // Update elapsed time.
    time.elapsed = now - time.start;

    // If elapsed time passed time for current level
    if (time.elapsed > time.level) {
    
    // Restart counting from now
    time.start = now;

    this.drop();
    }

    // Clear board before drawing new state.
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    board.draw();
    requestID = requestAnimationFrame(animate);    
}

let accountValues = {
    score: 0,
    lines: 0,
    level: 0
}

function updateAccount(key, value) {
    let element = document.getElementById(key);
    if (element) {
        element.textContent = value;
    }
}

let account = new Proxy(accountValues, {
    set: (target, key, value) => {
        target[key] = value;
        updateAccount(key, value);
        return true;
    }
})

if (event.keyCode === KEY.SPACE) {
    while (board.valid(p)) {
        account.score += POINTS.HARD_DROP;
        board.piece.move(p);
        p= moves[KEY.DOWN] (board.piece);
    }
} else if (board.valid(p)) {
    board.piece.move(p);
    if (event.keyCode === KEY.DOWN) {
        account.score += POINTS.SOFT_DROP;
    }
}

function gameOver() {
    cancelAnimationFrame(requestID);
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(1, 2, 3, 8, 1.2);
    this.ctx.font = '1px Arial';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText('GAME OVER', 1.8, 4);
}