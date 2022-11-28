import { onSnake, expandSnake, addScore } from './snake.js'
import { randomGridPosition } from './grid.js'
import { score } from './snake.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 1
const Score_Expasion = 1


export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
    addScore(Score_Expasion)
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}