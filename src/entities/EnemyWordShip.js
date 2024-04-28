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
    const ships = Array.from({ length: count }, () => new EnemyWordShip(count))
    return ships
  }

  draw(context, { speed }) {
    const itemWidth = this.word.length * 10
    const itemHeight = this.word.length * 10

    // Draw the black background for the item
    context.fillRect(this.coords.x, this.coords.y, itemWidth, itemHeight)

    // Draw the circle
    context.beginPath()
    context.arc(this.coords.x + itemWidth / 2, this.coords.y + itemHeight / 2, this.styles.radius, 0, 2 * Math.PI, false)
    context.fillStyle = 'green'
    context.fill()
    context.lineWidth = 5
    context.strokeStyle = '#003300'
    context.stroke()

    // Set the text styles
    context.fillStyle = this.styles.color
    context.font = this.styles.font
    context.textAlign = this.styles.textAlign
    context.textBaseline = this.styles.textBaseline

    // Calculate the center position for the text
    const centerX = this.coords.x + itemWidth / 2
    const centerY = this.coords.y + itemHeight / 2

    // Draw the text centered within the item
    context.fillText(this.word, centerX, centerY)
    this.coords.y += speed

    // Reset position when it reaches the bottom of the canvas
    if (this.coords.y > context.canvas.height) {
      const { x, y } = generateRandomCoordinates()
      this.coords.x = x
      this.coords.y = y
    }
  }
}
