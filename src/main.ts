import { canvas, ctx, config } from './canvas';
import { Cell, O, X } from './components';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.
const cell = new Cell(0, 0);
cell.draw(ctx);

const x = new X(100, 100);
x.draw(ctx);

const o = new O(200, 200);
o.draw(ctx);
