import { getRandomNumber, startGame } from '../index.js';

const isNumberPrime = (currentNumber) => {
  if ((currentNumber === 0) || (currentNumber === 1)) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(currentNumber); i += 1) {
    if ((currentNumber % i === 0)) {
      return false;
    }
  }
  return true;
};

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestion = () => getRandomNumber();

const getAnswer = (expression) => {
  if (isNumberPrime(expression)) {
    return 'yes';
  }
  return 'no';
};

const gamePare = () => {
  const result = [];
  const question = getQuestion();
  const answer = getAnswer(question);
  result.push(question, answer);
  return result;
};

const startBrainPrime = () => startGame(gameQuestion, gamePare);
export default startBrainPrime;
