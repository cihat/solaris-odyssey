import { dimensions, countOfEnemies } from '../store'
// @ts-ignore
import { Random } from "random-js";
const random = new Random(); // uses the nativeMath engine

const itemWidth = 100
const itemHeight = 100
const gap = 100

let existingCoordinates = []
let originY = 0

export function generateRandomCoordinates() {
  let canvasWidth = 600, canvasHeight = 900, countOfItems = 5
  let randomX, randomY

  dimensions.subscribe(value => {
    canvasWidth = value.width
    canvasHeight = value.height

    existingCoordinates = []
  })
  countOfEnemies.subscribe(value => countOfItems = value)

  do {
    randomX = random.integer(0, (canvasWidth - itemWidth))
    randomY = -random.integer(0, (itemHeight + itemHeight * countOfItems))
  } while (existingCoordinates.some(coord => {
    return (
      randomX < coord.x + itemWidth + gap &&
      randomX + itemWidth + gap > coord.x &&
      randomY < coord.y + itemHeight + gap &&
      randomY + itemHeight + gap > coord.y
    )
  }))

  existingCoordinates.push({ x: randomX, y: randomY })

  originY += -random.integer(countOfItems, (itemHeight * (countOfItems + gap) / 2))

  if (originY >= canvasHeight) {
    originY = -(originY - canvasHeight)
  }

  return { x: randomX, y: randomY }
}


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
