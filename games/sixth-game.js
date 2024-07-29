import { getRandomNumber, mainFunctionOfGame } from '../index.js';

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

const getQuestionArr = () => {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    arr.push(getRandomNumber());
  }
  return arr;
};

const getAnswerArr = (arrOfData) => {
  const answerArr = [];
  for (const item of arrOfData) {
    answerArr.push(isNumberPrime(item));
  }
  return answerArr;
};

const questionArr = getQuestionArr();
const answerArr = getAnswerArr(questionArr);

const startSixthGame = () => mainFunctionOfGame(gameQuestion, questionArr, answerArr);
export default startSixthGame;
