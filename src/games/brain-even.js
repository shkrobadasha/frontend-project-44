import { getRandomNumber, startGame } from '../index.js';

function isNumberEven(currentNumber) {
  if (currentNumber % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

export const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => getRandomNumber();

const getAnswer = (number) => isNumberEven(number);

const gamePare = () => {
  const result = [];
  const question = getQuestion();
  const anSwer = getAnswer(question);
  result.push(question);
  result.push(anSwer);
  return result;
};

const startBrainEven = () => startGame(gameQuestion, gamePare);
export default startBrainEven;
