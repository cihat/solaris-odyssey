// Bullet.js
export default class Bullet {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.target = null // Property to store the target enemy wordship
  }

  // Method to set the target enemy wordship
  setTarget(target) {
    this.target = target
  }

  draw(ctx) {
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  update() {
    if (this.target) {
      // Calculate the direction towards the target
      const dx = this.target.coords.x - this.x
      const dy = this.target.coords.y - this.y

      // Calculate the distance between the bullet and the target
      const distance = Math.sqrt(dx * dx + dy * dy)

      // Move the bullet towards the target
      this.x += dx / distance * 25 // Adjust the speed as needed
      this.y += dy / distance * 25 // Adjust the speed as needed
    } else {
      // If there's no target, move the bullet upward
      this.y -= 5
      this.target = null
    }
  }
}
