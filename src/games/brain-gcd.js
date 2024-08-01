import { getRandomNumber, startGame } from '../index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

function resultOfExpression(expression) {
  const arr = expression.split(' ');
  let firstNumber = Number(arr[0]);
  let secondNumber = Number(arr[1]);
  while ((firstNumber !== 0) && (secondNumber !== 0)) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  return firstNumber + secondNumber;
}

const getExpression = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  return `${firstNumber} ${secondNumber}`;
};

const getQuestion = () => {
  return getExpression();
};

const getAnswer = (expression) => {
  return String(resultOfExpression(expression));
};

const gamePare = () => {
  const result = [];
  const question = getQuestion();
  const answer = getAnswer(question);
  result.push(question);
  result.push(answer);
  return result
}


const startBrainGcd = () => startGame(gameQuestion, gamePare);
export default startBrainGcd;
