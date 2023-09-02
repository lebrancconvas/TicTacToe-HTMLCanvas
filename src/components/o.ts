export class O {
  x: number;
  y: number;
  radius: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.radius = 30;
  }

  draw(c: CanvasRenderingContext2D) {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.strokeStyle = 'White';
    c.stroke();
    c.closePath();
  }
};
