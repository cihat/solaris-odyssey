export default class Bullet {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  create(x, y) {
    return new Bullet(x, y, 10, 10);
  }

  update() {
    this.y -= 5;
  }
}
