import { canvas, ctx, config } from './canvas';
import { Cell, O, X } from './components';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.

// Game Title Text.
ctx.font = '100px Arial';
ctx.fillStyle = 'White';
ctx.textAlign = 'center';
ctx.fillText('Tic Tac Toe', canvas.width / 2, 200);

// Table.

let isTurnX = false;
let isGameOver = false;

const centerpointX = canvas.width / 2 - 50;
const centerpointY = canvas.height / 2 - 50;

const cell1 = new Cell(centerpointX - 100, centerpointY - 100);
cell1.draw(ctx);
const cell2 = new Cell(centerpointX, centerpointY - 100);
cell2.draw(ctx);
const cell3 = new Cell(centerpointX + 100, centerpointY - 100);
cell3.draw(ctx);
const cell4 = new Cell(centerpointX - 100, centerpointY);
cell4.draw(ctx);
const cell5 = new Cell(centerpointX, centerpointY);
cell5.draw(ctx);
const cell6 = new Cell(centerpointX + 100, centerpointY);
cell6.draw(ctx);
const cell7 = new Cell(centerpointX - 100, centerpointY + 100);
cell7.draw(ctx);
const cell8 = new Cell(centerpointX, centerpointY + 100);
cell8.draw(ctx);
const cell9 = new Cell(centerpointX + 100, centerpointY + 100);
cell9.draw(ctx);

// Mouse Event.
const mouse = {
  x: 0,
  y: 0
}

function mark(cell: Cell) {
  if(!cell.isMarked) {
    if(isTurnX) {
      const x = new X(cell.centerPoint.x - 25, cell.centerPoint.y - 25);
      x.draw(ctx);
      isTurnX = false;
      cell.symbol = 'x';
      cell.isMarked = true;
    } else {
      const o = new O(cell.centerPoint.x, cell.centerPoint.y);
      o.draw(ctx);
      isTurnX = true;
      cell.symbol = 'o';
      cell.isMarked = true;
    }
  }
};

function checkWinner() {
  if(
    (cell1.symbol === cell2.symbol && cell1.symbol === cell3.symbol && cell1.symbol !== '') ||
    (cell4.symbol === cell5.symbol && cell4.symbol === cell6.symbol && cell4.symbol !== '') ||
    (cell7.symbol === cell8.symbol && cell7.symbol === cell9.symbol && cell7.symbol !== '') ||
    (cell1.symbol === cell4.symbol && cell1.symbol === cell7.symbol && cell1.symbol !== '') ||
    (cell2.symbol === cell5.symbol && cell2.symbol === cell8.symbol && cell2.symbol !== '') ||
    (cell3.symbol === cell6.symbol && cell3.symbol === cell9.symbol && cell3.symbol !== '') ||
    (cell1.symbol === cell5.symbol && cell1.symbol === cell9.symbol && cell1.symbol !== '') ||
    (cell3.symbol === cell5.symbol && cell3.symbol === cell7.symbol && cell3.symbol !== '')
  ) {
    if(isTurnX) {
      // Set text below the table.
      ctx.font = '70px Arial';
      ctx.fillStyle = 'White';
      ctx.textAlign = 'center';
      ctx.fillText('O is winner!', canvas.width / 2, canvas.height / 2 + 230);
      ctx.font = '50px Arial';
      ctx.fillText('Pressed \"R\" to restart game.', canvas.width / 2, canvas.height / 2 + 300);
    } else {
      ctx.font = '70px Arial';
      ctx.fillStyle = 'White';
      ctx.textAlign = 'center';
      ctx.fillText('X is winner!', canvas.width / 2, canvas.height / 2 + 230);
      ctx.font = '50px Arial';
      ctx.fillText('Pressed \"R\" to restart game.', canvas.width / 2, canvas.height / 2 + 300);
    }
    isGameOver = true;
  }
};

window.addEventListener('keydown', (event: KeyboardEvent) => {
  if(isGameOver) {
    switch(event.key) {
      case 'r':
        window.location.reload();
        break;
    }
  }
});

window.addEventListener('click', (event: MouseEvent) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;

  if(!isGameOver) {
    if (cell1.isInside(mouse.x, mouse.y)) {
      mark(cell1);
    }

    if (cell2.isInside(mouse.x, mouse.y)) {
      mark(cell2);
    }

    if (cell3.isInside(mouse.x, mouse.y)) {
      mark(cell3);
    }

    if (cell4.isInside(mouse.x, mouse.y)) {
      mark(cell4);
    }

    if (cell5.isInside(mouse.x, mouse.y)) {
      mark(cell5);
    }

    if (cell6.isInside(mouse.x, mouse.y)) {
      mark(cell6);
    }

    if (cell7.isInside(mouse.x, mouse.y)) {
      mark(cell7);
    }

    if (cell8.isInside(mouse.x, mouse.y)) {
      mark(cell8);
    }

    if (cell9.isInside(mouse.x, mouse.y)) {
      mark(cell9);
    }

    checkWinner();
  }
});


