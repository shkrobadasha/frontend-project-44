import { getRandomNumber, startGame } from '../index.js';

function isNumberEven(currentNumber) {
  return (currentNumber % 2 === 0);
}

export const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const getAnswer = (number) => {
  if (isNumberEven(number)) {
    return 'yes';
  }
  return 'no';
};

const gamePare = () => {
  const result = [];
  const question = getRandomNumber();
  const answer = getAnswer(question);
  result.push(question, answer);
  return result;
};

const startBrainEven = () => startGame(gameQuestion, gamePare);
export default startBrainEven;
