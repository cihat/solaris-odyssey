import SpaceShip from "./SpaceShip";
import EnemyWordShip from "./EnemyWordShip";
import { soundManager } from "../lib/sound";
import solarisSoundTrack from '../assets/sound/Solaris-Soundtrack.ogg';

const levels = [
  { speed: 1, numberOfEnemies: 10 },
  { speed: 2, numberOfEnemies: 20 },
  { speed: 3, numberOfEnemies: 30 },
  { speed: 4, numberOfEnemies: 40 },
  { speed: 5, numberOfEnemies: 50 },
  { speed: 6, numberOfEnemies: 60 },
  { speed: 7, numberOfEnemies: 70 },
  { speed: 8, numberOfEnemies: 80 },
  { speed: 9, numberOfEnemies: 90 },
  { speed: 10, numberOfEnemies: 100 },
  { speed: 11, numberOfEnemies: 110 },
]

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

    window.addEventListener('keydown', (event) => this.fire(event))
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
