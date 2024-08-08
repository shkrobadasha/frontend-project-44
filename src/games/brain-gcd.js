import startGame from '../index.js';
import { getRandomNumber } from '../util.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

function resultOfExpression(firstNumber, secondNumber) {
  let fNumber = firstNumber;
  let sNumber = secondNumber;
  while ((fNumber !== 0) && (sNumber !== 0)) {
    if (fNumber > sNumber) {
      fNumber %= sNumber;
    } else {
      sNumber %= fNumber;
    }
  }
  return fNumber + sNumber;
}

const buildExpression = (firstNumber, secondNumber) => `${firstNumber} ${secondNumber}`;

const gamePare = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const result = [];
  const question = buildExpression(firstNumber, secondNumber);
  const answer = String(resultOfExpression(firstNumber, secondNumber));
  result.push(question, answer);
  return result;
};

const startBrainGcd = () => startGame(gameQuestion, gamePare);
export default startBrainGcd;
