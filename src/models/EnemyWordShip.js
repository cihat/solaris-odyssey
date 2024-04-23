import { getWord } from "../data/words"
import { generateRandomCoordinates } from "../lib/random"

export default class WordShip {
  styles = {
    color: 'black',
    fillStyle: 'white',
    font: '20px Arial',
    textAlign: 'center',
    textBaseline: 'middle',
    radius: 50,
  }
  coords = {
    x: 0,
    y: 0,
  }

  constructor() {
    this.word = getWord({ level: 2 })
    const { x, y } = generateRandomCoordinates()
    this.coords.x = x
    this.coords.y = y
  }

  generate(count) {
    const ships = Array.from({ length: count }, () => new WordShip());
    return ships;
  }

  draw(ctx, { speed }) {
    const itemWidth = this.word.length * 10;
    const itemHeight = this.word.length * 10;

    // Draw the black background for the item
    ctx.fillRect(this.coords.x, this.coords.y, itemWidth, itemHeight);

    // Draw the circle
    ctx.beginPath();
    ctx.arc(this.coords.x + itemWidth / 2, this.coords.y + itemHeight / 2, this.styles.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();

    // Set the text styles
    ctx.fillStyle = this.styles.color;
    ctx.font = this.styles.font;
    ctx.textAlign = 'center'; // Center the text horizontally
    ctx.textBaseline = 'middle'; // Center the text vertically

    // Calculate the center position for the text
    const centerX = this.coords.x + itemWidth / 2;
    const centerY = this.coords.y + itemHeight / 2;

    // Draw the text centered within the item
    ctx.fillText(this.word, centerX, centerY);
    this.coords.y += speed;

    // Reset position when it reaches the bottom of the canvas
    if (this.coords.y > ctx.canvas.height) {
      const { x, y } = generateRandomCoordinates()
      this.coords.x = x
      this.coords.y = y
    }
  }
}
