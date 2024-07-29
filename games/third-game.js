import { getRandomItem, getRandomNumber, mainFunctionOfGame } from '../index.js';

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

const getQuestionArr = () => {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    arr.push(getExpression());
  }
  return arr;
};

const getAnswerArr = (arrOfData) => {
  const arr = [];
  for (const item of arrOfData) {
    arr.push(String(resultOfExpression(item)));
  }
  return arr;
};

const questionArr = getQuestionArr();
const answerArr = getAnswerArr(questionArr);

const startThirdGame = () => mainFunctionOfGame(gameQuestion, questionArr, answerArr);
export default startThirdGame;
