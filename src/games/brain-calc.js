import { getRandomItem, getRandomNumber, startGame } from '../index.js';

function getRandomSign() {
  const signs = ['+', '-', '*'];
  return signs[getRandomItem(signs.length)];
}

function resultOfExpression(firstNumber, secondNumber, sign) {
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

const getExpression = (firstNumber, secondNumber, sign) => `${firstNumber} ${sign} ${secondNumber}`;

const gameQuestion = 'What is the result of the expression?';

const getQuestion = (fNumber, sNumber, sign) => getExpression(fNumber, sNumber, sign);
const getAnswer = (fNumber, sNumber, sign) => String(resultOfExpression(fNumber, sNumber, sign));
const gamePare = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const sign = getRandomSign();
  const result = [];
  const question = getQuestion(firstNumber, secondNumber, sign);
  const answer = getAnswer(firstNumber, secondNumber, sign);
  result.push(question, answer);
  return result;
};

const startBrainCalc = () => startGame(gameQuestion, gamePare);
export default startBrainCalc;
