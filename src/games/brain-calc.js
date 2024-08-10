import startGame from '../index.js';
import { getRandomItem, getRandomNumber } from '../util.js';

function getRandomSign() {
  const signs = ['+', '-', '*'];
  return signs[getRandomItem(signs.length)];
}

function calculateResult(firstNumber, secondNumber, sign) {
  switch (sign) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown sign: '${sign}'!`);
  }
}

const gameQuestion = 'What is the result of the expression?';

const gamePare = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const sign = getRandomSign();
  const result = [];
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  const answer = String(calculateResult(firstNumber, secondNumber, sign));
  result.push(question, answer);
  return result;
};

const startBrainCalc = () => startGame(gameQuestion, gamePare);
export default startBrainCalc;
