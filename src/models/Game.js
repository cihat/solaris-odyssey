import SpaceShip from "./SpaceShip";
import EnemyWordShip from "./EnemyWordShip";
import { soundManager } from "../lib/sound";
import solarisSoundTrack from '../assets/sound/Solaris-Soundtrack.ogg';

export default class Game extends EventTarget {
  enemyWordShips = []
  spaceShip = null
  speed = 0.5
  numberOfEnemies = 10
  context
  input = ""
  onStateChange = new Event('stateChange')
  isSoundPlaying = true

  constructor(context) {
    super()
    this.enemyWordShips = new EnemyWordShip().generate(this.numberOfEnemies)
    this.spaceShip = new SpaceShip(context)
    this.context = context

    this.animate()

    window.addEventListener('keyup', (event) => this.fire(event))
  }

  setNumberOfEnemies(number) {
    this.numberOfEnemies = number
    this.enemyWordShips = new EnemyWordShip().generate(this.numberOfEnemies)
    this.emitStateChange()
  }

  draw() {
    this.spaceShip.draw(this.context)
    this.enemyWordShips.forEach(ship => ship.draw(this.context, { speed: this.speed }))
  }

  animate() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
    this.draw()

    requestAnimationFrame(() => this.animate())
  }

  fire(event) {
    keyboardListener(event, this)
  }

  clearInput() {
    this.input = ""
  }

  playSound() {
    soundManager({
      sound: solarisSoundTrack,
      loop: true,
      volume: 0.3,
      status: this.isSoundPlaying ? 'play' : 'pause',
    })
  }

  emitStateChange() {
    this.dispatchEvent(new Event('stateChange'))
  }
}
