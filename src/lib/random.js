import { dimensions } from '../store/game'

const itemWidth = 120
const itemHeight = 300
const gap = 100

let existingCoordinates = []
let originY = 0

export function generateRandomCoordinates(countOfEnemies = 5) {
  let canvasWidth = 600
  let canvasHeight = 900
  let randomX, randomY

  dimensions.subscribe(value => {
    canvasWidth = value.width
    canvasHeight = value.height
  })

  do {
    randomX = getRandomArbitrary(0, (canvasWidth - itemWidth))
    randomY = -getRandomArbitrary(0, (itemHeight + itemHeight * (countOfEnemies / 2)))

  } while (
    existingCoordinates.some(coord =>
      randomX < coord.x + itemWidth + gap &&
      randomX + itemWidth + gap > coord.x &&
      randomY < coord.y + itemHeight + gap &&
      randomY + itemHeight + gap > coord.y
    ) && existingCoordinates.length < countOfEnemies / 2
  )


  existingCoordinates.push({ x: randomX, y: randomY })

  originY += getRandomArbitrary(countOfEnemies, (itemHeight * (2 ^ (countOfEnemies + gap) * 0.5)))

  if (originY >= canvasHeight) {
    originY = -(originY - canvasHeight)
  }

  if (existingCoordinates.length > countOfEnemies - 1) {
    existingCoordinates.shift()
  }

  return { x: randomX, y: randomY }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
