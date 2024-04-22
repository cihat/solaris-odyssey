import { getWord } from "../data/words"

export default class WordShip {
  styles = {
    color: 'white',
    fillStyle: 'white',
    font: '20px Arial',
    textAlign: 'center',
    textBaseline: 'middle',
  }

  speed = 0.3
  ships = [];

  constructor(speed) {
    this.word = getWord({ level: 2 })
    this.x = (Math.random() * 500) + 25;
    this.y = (Math.random() * -50) - (Math.random() * 100); // Start from above the canvas
    this.ship = {
      x: this.x,
      y: this.y,
      width: 20,
      height: 20,
    };
    this.speed = speed
  }

  generate(count) {
    const ships = Array.from({ length: count }, () => new WordShip());
    this.ships.push(ships);
    return ships;
  }

  draw(ctx) {
    ctx.fillStyle = this.styles.color;
    ctx.font = '20px Arial';
    ctx.fillText(this.word, this.x, this.y);
    ctx.strokeStyle = this.styles.fillStyle;
  }

  update(ctx) {
    // this.y += this.speed;
    this.y += 0.5;

    // Reset position when it reaches the bottom of the canvas
    if (this.y > ctx.canvas.height) {
      this.y = Math.random() * -100 - 40; // Start from above the canvas again
      this.x = (Math.random() * 600) + 50; // Randomize x position
      // this.speed = Math.random() * 2 + 1; // Randomize speed
    }
  }
}
