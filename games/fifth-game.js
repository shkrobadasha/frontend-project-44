import { getRandomNumber, mainFunctionOfGame } from '../index.js';

const gameQuestion = 'What number is missing in the progression?';

const answerArr = [];

const getTotalProgression = () => {
  let firstElement = getRandomNumber();
  const difference = getRandomNumber();
  const sequenceLength = getRandomNumber() + 5;
  let totalExpression = `${firstElement}`;
  for (let i = 0; i < sequenceLength; i += 1) {
    firstElement += difference;
    totalExpression += ' ';
    totalExpression += `${firstElement}`;
  }

  return totalExpression;
};

const getExpression = (expression) => {
  const arr = expression.split(' ');
  const randomIndex = Math.floor(Math.random() * arr.length);
  answerArr.push(arr[randomIndex]);
  arr[randomIndex] = '..';
  return arr.join(' ');
};

const getQuestionArr = (arrOfAnswer) => {
  const arr = [];
  /* eslint-disable-next-line */
  for (const item of arrOfAnswer) {
    arr.push(getExpression(item));
  }
  return arr;
};

const getCleanProgressions = () => {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    arr.push(getTotalProgression());
  }
  return arr;
};

const questionArr = getQuestionArr(getCleanProgressions());

const startFifthGame = () => mainFunctionOfGame(gameQuestion, questionArr, answerArr);
export default startFifthGame;
