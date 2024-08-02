import { getRandomNumber, startGame } from '../index.js';

const gameQuestion = 'What number is missing in the progression?';

const getDataOfExpression = () => {
  const result = [];
  const firstElement = getRandomNumber();
  const difference = getRandomNumber();
  const sequenceLength = getRandomNumber() + 5;
  result.push(firstElement, difference, sequenceLength);
  return result;
};

const getTotalProgression = (arrOfData) => {
  let [firstElement, difference, sequenceLength] = arrOfData;
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
  arr[randomIndex] = '..';
  return arr.join(' ');
};

const getQuestion = (progression) => getExpression(progression);

const getAnswer = (currentProgression, question) => {
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
  const result = [];
  const currentProgression = getTotalProgression(getDataOfExpression());
  const question = getQuestion(currentProgression);
  const answer = getAnswer(currentProgression, question);
  result.push(question, answer);
  return result;
};

const startBrainProgression = () => startGame(gameQuestion, gamePare);
export default startBrainProgression;
