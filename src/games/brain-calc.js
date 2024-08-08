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

const createExpression = (firstNumber, secondNumber, sign) => `${firstNumber} ${sign} ${secondNumber}`;

const gameQuestion = 'What is the result of the expression?';

const createQuestion = (fNumber, sNumber, sign) => createExpression(fNumber, sNumber, sign);
const createAnswer = (fNumber, sNumber, sign) => String(calculateResult(fNumber, sNumber, sign));
const gamePare = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const sign = getRandomSign();
  const result = [];
  const question = createQuestion(firstNumber, secondNumber, sign);
  const answer = createAnswer(firstNumber, secondNumber, sign);
  result.push(question, answer);
  return result;
};

const startBrainCalc = () => startGame(gameQuestion, gamePare);
export default startBrainCalc;
