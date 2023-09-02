export class X {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
  }

  draw(c: CanvasRenderingContext2D) {
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.x + this.width, this.y + this.height);
    c.moveTo(this.x + this.width, this.y);
    c.lineTo(this.x, this.y + this.height);
    c.strokeStyle = 'White';
    c.stroke();
    c.closePath();
  }
}
