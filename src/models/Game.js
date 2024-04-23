import SpaceShip from "./SpaceShip";
import EnemyWordShip from "./EnemyWordShip";

export default class Game extends EventTarget {
  enemyWordShips = []
  spaceShip = null
  speed = 0.3
  context
  input = ""
  onStateChange = new Event('stateChange')

  constructor(context) {
    super()
    this.enemyWordShips = new EnemyWordShip().generate(10)
    this.spaceShip = new SpaceShip(context)
    this.context = context

    window.addEventListener('keypress', (event) => this.fire(event))
  }

  draw() {
    this.spaceShip.draw(this.context)
    this.enemyWordShips.forEach(ship => ship.draw(this.context))
  }

  animate() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
    this.draw()
    requestAnimationFrame(() => this.animate())
  }

  fire(event) {
    const { key } = event
    this.spaceShip.fire()
    this.input += key

    this.enemyWordShips.forEach((w, i) => {
      if (w.word === this.input) {
        this.enemyWordShips.splice(i, 1)
        this.clearInput()
      }
    })

    if (
      key === 'Enter' ||
      key === 'Delete' ||
      key === ' ' ||
      key === 'Escape'
    ) {
      this.clearInput()
    }

    this.emitStateChange()
  }

  clearInput() {
    this.input = ""
  }

  emitStateChange() {
    this.dispatchEvent(new Event('stateChange'))
  }
}
