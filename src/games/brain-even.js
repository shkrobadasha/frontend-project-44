import startGame from '../index.js';
import { getRandomNumber } from '../util.js';

function isNumberEven(currentNumber) {
  return (currentNumber % 2 === 0);
}

export const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const createAnswer = (number) => {
  if (isNumberEven(number)) {
    return 'yes';
  }
  return 'no';
};

const gamePare = () => {
  const result = [];
  const question = getRandomNumber();
  const answer = createAnswer(question);
  result.push(question, answer);
  return result;
};

const startBrainEven = () => startGame(gameQuestion, gamePare);
export default startBrainEven;
