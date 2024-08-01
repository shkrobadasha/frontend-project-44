import { getRandomNumber, startGame } from '../index.js';

const isNumberPrime = (currentNumber) => {
  if ((currentNumber === 0) || (currentNumber === 1)) {
    return 'no';
  }
  for (let i = 2; i <= Math.sqrt(currentNumber); i += 1) {
    if ((currentNumber % i === 0)) {
      return 'no';
    }
  }
  return 'yes';
};

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';


const getQuestion = () => {
  return getRandomNumber();
};

const getAnswer = (expression) => {
  return isNumberPrime(expression);
};

const gamePare = () => {
  const result = [];
  const question = getQuestion();
  const answer = getAnswer(question);
  result.push(question);
  result.push(answer);
  return result
}

const startBrainPrime = () => startGame(gameQuestion, gamePare);
export default startBrainPrime;
