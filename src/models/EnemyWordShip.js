import { getWord } from "../data/words"

export default class WordShip {
  styles = {
    color: 'white',
    fillStyle: 'white',
    font: '20px Arial',
    textAlign: 'center',
    textBaseline: 'middle',
  }
  coords = {
    x: 0,
    y: 0,
  }

  constructor() {
    this.word = getWord({ level: 2 })
    this.coords.x = (Math.random() * 500) + 25;
    this.coords.y = (Math.random() * -50) - (Math.random() * 100); // Start from above the canvas
  }

  generate(count) {
    const ships = Array.from({ length: count }, () => new WordShip());
    return ships;
  }

  draw(ctx) {
    ctx.fillStyle = this.styles.color;
    ctx.font = '20px Arial';
    ctx.fillText(this.word, this.coords.x, this.coords.y);
    ctx.strokeStyle = this.styles.fillStyle;

    this.coords.y += 0.5;

    // Reset position when it reaches the bottom of the canvas
    if (this.coords.y > ctx.canvas.height) {
      this.coords.y = Math.random() * -100 - 40; // Start from above the canvas again
      this.coords.x = (Math.random() * 600) + 50; // Randomize x position
      // this.speed = Math.random() * 2 + 1; // Randomize speed
    }
  }
}
