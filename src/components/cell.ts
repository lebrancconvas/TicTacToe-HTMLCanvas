export class Cell {
  x: number;
  y: number;
  width: number;
  height: number;
  centerPoint: { x: number, y: number }
  isMarked: boolean;
  symbol: 'x' | 'o' | '';

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.isMarked = false;
    this.centerPoint = {
      x: this.x + this.width / 2,
      y: this.y + this.height / 2
    }
    this.symbol = '';
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.strokeStyle = 'White';
    ctx.stroke();
  }

  boundary() {
    return {
      top: this.y,
      right: this.x + this.width,
      bottom: this.y + this.height,
      left: this.x
    };
  }

  isInside(x: number, y: number): boolean {
    const boundary = this.boundary();
    return (
      x >= boundary.left &&
      x <= boundary.right &&
      y >= boundary.top &&
      y <= boundary.bottom
    );
  }
};
