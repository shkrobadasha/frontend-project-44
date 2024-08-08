import startGame from '../index.js';
import { getRandomNumber } from '../util.js';

const gameQuestion = 'What number is missing in the progression?';

const getTotalProgression = (firstElement, difference, sequenceLength) => {
  let changefirstElement = firstElement;
  let totalExpression = `${firstElement}`;
  for (let i = 0; i < sequenceLength; i += 1) {
    changefirstElement += difference;
    totalExpression += ' ';
    totalExpression += `${changefirstElement}`;
  }
  return totalExpression;
};

const getExpression = (expression) => {
  const arr = expression.split(' ');
  const randomIndex = Math.floor(Math.random() * arr.length);
  arr[randomIndex] = '..';
  return arr.join(' ');
};

const createQuestion = (progression) => getExpression(progression);

const createAnswer = (currentProgression, question) => {
  const questionArr = question.split(' ');
  const progressionArr = currentProgression.split(' ');
  let index;
  for (let i = 0; i < questionArr.length; i += 1) {
    if (questionArr[i] === '..') {
      index = i;
    }
  }
  return progressionArr[index];
};

const gamePare = () => {
  const firstElement = getRandomNumber();
  const difference = getRandomNumber();
  const sequenceLength = getRandomNumber() + 5;
  const currentProgression = getTotalProgression(firstElement, difference, sequenceLength);
  const question = createQuestion(currentProgression);
  const answer = createAnswer(currentProgression, question);
  const result = [];
  result.push(question, answer);
  return result;
};

const startBrainProgression = () => startGame(gameQuestion, gamePare);
export default startBrainProgression;
