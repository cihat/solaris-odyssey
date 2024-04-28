import { getWord } from "../data/words"
import { generateRandomCoordinates } from "../lib/random"

export default class EnemyWordShip {
  styles = {
    color: 'white',
    fillStyle: 'white',
    font: '18px Arial',
    textAlign: 'center',
    textBaseline: 'middle',
    radius: 50,
  }
  coords = {
    x: 0,
    y: 0,
  }

  constructor() {
    this.word = getWord({ level: '2-1' })

    const { x, y } = generateRandomCoordinates()
    this.coords.x = x
    this.coords.y = y
  }

  static generate(count) {
    const ships = Array.from({ length: count }, (_, i) => new EnemyWordShip())
    return ships
  }

  draw(context, { speed }) {
    const itemWidth = this.word.length * 10;
    const itemHeight = this.word.length * 10;

    const spaceshipColor = '#2c3e50'; // Dark gray
    const windowColor = '#e74c3c'; // Light gray
    const exhaustColor = '#e74c3c'; // Red

    // Draw the spaceship body
    context.beginPath();
    context.moveTo(this.coords.x + itemWidth / 2, this.coords.y);
    context.lineTo(this.coords.x, this.coords.y + itemHeight);
    context.lineTo(this.coords.x + itemWidth, this.coords.y + itemHeight);
    context.closePath();
    context.fillStyle = spaceshipColor;
    context.fill();

    // Draw the windows
    context.beginPath();
    context.arc(this.coords.x + itemWidth / 2, this.coords.y + itemHeight / 2, 10, 0, Math.PI * 2);
    context.arc(this.coords.x + itemWidth / 2 - 20, this.coords.y + itemHeight / 2 + 20, 5, 0, Math.PI * 2);
    context.arc(this.coords.x + itemWidth / 2 + 20, this.coords.y + itemHeight / 2 + 20, 5, 0, Math.PI * 2);
    context.fillStyle = windowColor;
    context.fill();

    // Draw the exhaust
    context.beginPath();
    context.moveTo(this.coords.x + itemWidth / 2 - 10, this.coords.y + itemHeight);
    context.lineTo(this.coords.x + itemWidth / 2, this.coords.y + itemHeight + 20);
    context.lineTo(this.coords.x + itemWidth / 2 + 10, this.coords.y + itemHeight);
    context.closePath();
    context.fillStyle = exhaustColor;
    context.fill();

    // Set the text styles
    context.fillStyle = '#fff'; // White text
    context.font = this.styles.font;
    context.textAlign = this.styles.textAlign;
    context.textBaseline = this.styles.textBaseline;

    // Calculate the center position for the text
    const centerX = this.coords.x + itemWidth / 2;
    const centerY = this.coords.y + itemHeight / 2;


    // Set the text styles
    context.fillStyle = '#fff'; // White text
    context.font = 'bold ' + this.styles.font; // Adding 'bold' to the font style
    context.textAlign = this.styles.textAlign;
    context.textBaseline = this.styles.textBaseline;

    // Draw the text centered within the item
    context.fillText(this.word, centerX, centerY);
    this.coords.y += speed;

    // Reset position when it reaches the bottom of the canvas
    if (this.coords.y > context.canvas.height) {
      const { x, y } = generateRandomCoordinates();
      this.coords.x = x;
      this.coords.y = y;
    }
  }

}
