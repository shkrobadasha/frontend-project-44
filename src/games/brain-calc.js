import { getRandomItem, getRandomNumber, startGame } from '../index.js';

function getRandomSign() {
  const signs = ['+', '-', '*'];
  return signs[getRandomItem(signs.length)];
}

function resultOfExpression(expression) {
  const arr = expression.split(' ');
  const firstNumber = Number(arr[0]);
  const secondNumber = Number(arr[2]);
  switch (arr[1]) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      return firstNumber * secondNumber;
  }
}

const getExpression = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const randomSign = getRandomSign();
  return `${firstNumber} ${randomSign} ${secondNumber}`;
};

const gameQuestion = 'What is the result of the expression?';

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

const startBrainCalc = () => startGame(gameQuestion, gamePare);
export default startBrainCalc;
