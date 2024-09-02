import startGame from '../index.js';
import { getRandomNumber } from '../util.js';

const gameQuestion = 'What number is missing in the progression?';

const getTotalProgression = (firstElement, difference, sequenceLength) => {
  let changefirstElement = firstElement;
  const result = [];
  for (let i = 0; i < sequenceLength; i += 1) {
    changefirstElement += difference;
    result.push(changefirstElement);
  }
  return result;
};

const createRandomIndex = (progression) => {
  const randomIndex = Math.floor(Math.random() * progression.length);
  return randomIndex;
};

const gamePare = () => {
  const firstElement = getRandomNumber();
  const difference = getRandomNumber();
  const sequenceLength = getRandomNumber() + 5;
  const currentProgression = getTotalProgression(firstElement, difference, sequenceLength);
  const randomIndex = createRandomIndex(currentProgression);
  const answer = String(currentProgression[randomIndex]);
  currentProgression[randomIndex] = '..';
  const result = [];
  result.push(currentProgression.join(' '), answer);
  return result;
};

const startBrainProgression = () => startGame(gameQuestion, gamePare);
export default startBrainProgression;
