import { canvas, ctx, config } from './canvas';
import { Cell, O, X } from './components';
import { GameState } from './state';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.

// Table.

let isTurnX = false;
let isProcess = false;

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
      cell.isMarked = true;
    } else {
      const o = new O(cell.centerPoint.x, cell.centerPoint.y);
      o.draw(ctx);
      isTurnX = true;
      cell.isMarked= true;
    }
  }
};

window.addEventListener('click', (event: MouseEvent) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;

  if(cell1.isInside(mouse.x, mouse.y)) {
    mark(cell1);
  }

  if(cell2.isInside(mouse.x, mouse.y)) {
    mark(cell2);
  }

  if(cell3.isInside(mouse.x, mouse.y)) {
    mark(cell3);
  }

  if(cell4.isInside(mouse.x, mouse.y)) {
    mark(cell4);
  }

  if(cell5.isInside(mouse.x, mouse.y)) {
    mark(cell5);
  }

  if(cell6.isInside(mouse.x, mouse.y)) {
    mark(cell6);
  }

  if(cell7.isInside(mouse.x, mouse.y)) {
    mark(cell7);
  }

  if(cell8.isInside(mouse.x, mouse.y)) {
    mark(cell8);
  }

  if(cell9.isInside(mouse.x, mouse.y)) {
    mark(cell9);
  }
});


