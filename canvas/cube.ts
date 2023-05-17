export default class Cube {
  x;
  y;
  ctx;
  size;
  angle;
  gravity;
  image;
  constructor(
    x: number,
    y: number,
    image: string,
    ctx: CanvasRenderingContext2D
  ) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.size = 40;
    this.angle = 0;
    this.gravity = 4;
    this.image = new Image();

    this.image.src = `data:image/svg+xml,${encodeURIComponent(image)}`;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      -this.size / 2,
      -this.size / 2,
      this.size,
      this.size
    );
  }

  update() {
    this.ctx.save();

    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(this.angle);
    this.angle += 0.03;
    this.y += this.gravity;
    this.draw();
    this.ctx.restore();
  }
}
