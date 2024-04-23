const canvasWidth = 600;
const canvasHeight = 900;
const itemWidth = 100; // Adjust according to your item's width
const itemHeight = 100; // Adjust according to your item's height
const gap = 100; // Adjust the gap between items

// Generate random coordinates for the item
export function generateRandomCoordinates() {
  const maxX = canvasWidth - itemWidth - gap;
  const maxY = canvasHeight - itemHeight - gap;

  const randomX = Math.random() * maxX + itemHeight
  const randomY = Math.random() * maxY - canvasHeight / 1.5

  return { x: randomX, y: randomY };
}
