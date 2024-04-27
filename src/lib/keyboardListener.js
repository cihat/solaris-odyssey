export default function keyboardListener(event, game) {
  const { key } = event

  if (
    key === 'Enter' ||
    key === ' ' ||
    key === 'Escape'
  ) game.clearInput()

  if (key.match(/^[a-zA-Z]{1}$/)) {
    game.input += key
    game.spaceShip.fire()
  }
  else if (key === 'Backspace') {
    game.input = game.input.slice(0, -1)
  }

  game.enemyWordShips.forEach((w, i) => {
    if (w.word === game.input) {
      game.enemyWordShips.splice(i, 1)
      game.score += 1
      game.clearInput()
      game.clearAllBullets()
    }
  })

  game.emitStateChange()
}
