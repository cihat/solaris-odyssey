import { dimensions } from '../store';

const itemWidth = 100; // Adjust according to your item's width
const itemHeight = 100; // Adjust according to your item's height
const gap = 200; // Adjust the gap between items

// This place will be refactored later
let existingCoordinates = [];

export function generateRandomCoordinates(currentEnemyCount) {
  let canvasWidth = 600, canvasHeight = 900

  dimensions.subscribe(value => {
    canvasWidth = value.width;
    canvasHeight = value.height;
  });

  const maxX = canvasWidth - itemWidth - gap;
  const maxY = canvasHeight - itemHeight - gap;

  const randomX = Math.random() * maxX + itemHeight;
  const randomY = Math.random() * maxY - canvasHeight / 1.5;

  // if (checkCoordinates(existingCoordinates, { x: randomX, y: randomY }))
  //   return generateRandomCoordinates(currentEnemyCount);

  // existingCoordinates.push({ x: randomX, y: randomY });
  // if (existingCoordinates.length === currentEnemyCount)
  //   existingCoordinates = [];

  return { x: randomX, y: randomY };
}

// function checkCoordinates(existingCoordinates, { x, y }) {
//   return existingCoordinates.some(coord => {
//     return x > coord.x && x < coord.x + itemWidth + gap && y > coord.y && y < coord.y + itemHeight + gap;
//   });
// }
