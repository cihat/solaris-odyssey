import laserSoundPath from '../assets/sound/plasma.ogg';
import Bullet from './Bullet';

export default class SpaceShip {
  ship = {
    x: 0,  // x position will be calculated
    y: 0,  // y position will be calculated
    width: 40,
    height: 40,
  };
  bullet = {
    width: 10,
    height: 10,
  };
  context
  input = ""

  constructor(context, wordShips) {
    // Calculate x position to center the spaceship horizontally
    // Set y position to place the spaceship at the bottom of the canvas
    this.context = context
    this.ship.x = (context.canvas.width - this.ship.width) / 2;
    this.ship.y = context.canvas.height - this.ship.height;
    this.wordShips = wordShips;
  }

  draw(ctx) {
    // Draw SpaceShip
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.ship.x, this.ship.y, this.ship.width, this.ship.height);

    // Draw Bullet
    ctx.fillStyle = 'red';
    // ctx.fillRect(this.context.width + 10, this.context.height + 10, this.bullet.width, this.bullet.height);
    ctx.fillRect(this.context.width + 10, this.context.height + 10, 100, 100)

    // Draw spaceship details (optional)
    ctx.fillStyle = 'grey';
    ctx.fillRect(this.ship.x + 10, this.ship.y - 10, 20, 10); // Cockpit
    ctx.fillRect(this.ship.x + 5, this.ship.y + 10, 10, 5); // Left wing
    ctx.fillRect(this.ship.x + 25, this.ship.y + 10, 10, 5); // Right wing
  }

  fire() {
    // Set bullet position to the top of the spaceship
    this.bullet.x = this.ship.x + (this.ship.width - this.bullet.width) / 2;
    this.bullet.y = this.ship.y - this.bullet.height;
    const bullet = new Bullet(this.bullet.x, this.bullet.y, this.bullet.width, this.bullet.height);
    bullet.draw(this.context);

    const laserSound = new Audio(laserSoundPath);
    laserSound.volume = 0.3;
    laserSound.play();
  }

  getExistingWordsLength() {
    return this.wordShips.length;
  }
}
