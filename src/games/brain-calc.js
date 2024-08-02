import { getRandomItem, getRandomNumber, startGame } from '../index.js';

function getRandomSign() {
  const signs = ['+', '-', '*'];
  return signs[getRandomItem(signs.length)];
}

const getDataOfExpression = () => {
  const result = [];
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const randomSign = getRandomSign();
  result.push(firstNumber, secondNumber, randomSign);
  return result;
};

function resultOfExpression(arrOfData) {
  const [firstNumber, secondNumber, sign] = arrOfData;
  switch (sign) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      return firstNumber * secondNumber;
  }
}

const getExpression = (arrOfData) => {
  const [firstNumber, secondNumber, sign] = arrOfData;
  return `${firstNumber} ${sign} ${secondNumber}`;
};

const gameQuestion = 'What is the result of the expression?';

const getQuestion = (data) => getExpression(data);

const getAnswer = (data) => String(resultOfExpression(data));

const gamePare = () => {
  const data = getDataOfExpression();
  const result = [];
  const question = getQuestion(data);
  const answer = getAnswer(data);
  result.push(question, answer);
  return result;
};

const startBrainCalc = () => startGame(gameQuestion, gamePare);
export default startBrainCalc;
