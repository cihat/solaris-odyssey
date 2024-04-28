import SpaceShip from "./SpaceShip"
import EnemyWordShip from "./EnemyWordShip"
import { playSound, soundManager } from "../lib/sound"
import solarisSoundTrack from '../assets/sound/Solaris-Soundtrack.ogg'
import explosionSound from '../assets/sound/explosion-small.ogg'
import keyboardListener from "../lib/keyboardListener"

export default class Game extends EventTarget {
  enemyWordShips = []
  spaceShip = null
  speed = 0.5
  numberOfEnemies = 10
  context
  input = ""
  onStateChange = new Event('stateChange')
  isSoundPlaying = true
  bullets = []
  targetLocked = false
  score = 0

  constructor(context) {
    super()
    this.context = context
    this.enemyWordShips = this.setNumberOfEnemies(this.numberOfEnemies)
    this.spaceShip = new SpaceShip(context)

    this.animate()

    window.addEventListener('keyup', (event) => this.fire(event))
  }

  setNumberOfEnemies(number) {
    this.numberOfEnemies = number
    this.enemyWordShips = new EnemyWordShip().generate(this.numberOfEnemies)
    this.emitStateChange()

    return this.enemyWordShips
  }

  draw() {
    this.spaceShip.draw(this.context)
    this.enemyWordShips.forEach(ship => ship.draw(this.context, { speed: this.speed }))
    this.bullets.forEach(bullet => bullet.draw(this.context))
  }

  animate() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
    this.draw()
    this.updateBullets()

    requestAnimationFrame(() => this.animate())
  }

  updateBullets() {
    // Update the position of each bullet
    this.bullets.forEach(bullet => {
      bullet.update()
      if (bullet.y < 0 || bullet.x < 0 || bullet.x > this.context.canvas.width || bullet.y > this.context.canvas.height) {
        // Remove bullets that are out of bounds
        this.bullets.splice(this.bullets.indexOf(bullet), 1)
      }
    })
  }

  calculateMatchingScore(input, word) {
    let score = 0

    for (let i = 0; i < input.length; i++) {
      if (input[i] === word[i])
        score += 1
    }

    return score
  }

  mostMatchedEnemy() {
    let mostMatchedEnemy = null
    let highestScore = 0

    this.enemyWordShips.forEach(ship => {
      const score = this.calculateMatchingScore(this.input, ship.word)

      if (score > highestScore) {
        highestScore = score
        mostMatchedEnemy = ship
      }
    })
    return mostMatchedEnemy
  }

  fire(event) {
    keyboardListener(event, this)

    const bullet = this.spaceShip.createBullet()
    let mostMatchedEnemy = null
    let highestScore = 0

    this.enemyWordShips.forEach(ship => {
      const score = this.calculateMatchingScore(this.input, ship.word)
      if (score > highestScore) {
        highestScore = score
        mostMatchedEnemy = ship
      }
    })

    if (mostMatchedEnemy) {
      bullet.setTarget(mostMatchedEnemy)
      this.bullets.push(bullet)
    }
  }

  clearAllBullets() {
    this.bullets = []
    playSound(explosionSound, 0.3)
  }

  clearInput() {
    this.input = ""
  }

  playSound(sound = solarisSoundTrack, config = { loop: true, volume: 0.3 }) {
    soundManager({
      sound,
      loop: config.loop,
      volume: config.volume,
      status: this.isSoundPlaying ? 'play' : 'pause',
    })
  }

  emitStateChange() {
    this.dispatchEvent(new Event('stateChange'))
  }
}
