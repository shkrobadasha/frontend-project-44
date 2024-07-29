import { getRandomNumber, mainFunctionOfGame } from '../index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

function resultOfExpression(expression) {
  const arr = expression.split(' ');
  let firstNumber = Number(arr[0]);
  let secondNumber = Number(arr[1]);
  while ((firstNumber !== 0) && (secondNumber !== 0)) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  return firstNumber + secondNumber;
}

const getExpression = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  return `${firstNumber} ${secondNumber}`;
};

const getQuestionArr = () => {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    arr.push(getExpression());
  }
  return arr;
};

const getAnswerArr = (arrOfQuestions) => {
  const arr = [];
  /* eslint-disable-next-line */
  for (const item of arrOfQuestions) {
    arr.push(String(resultOfExpression(item)));
  }
  return arr;
};

const questionArr = getQuestionArr();
const answerArr = getAnswerArr(questionArr);

const startFourthGame = () => mainFunctionOfGame(gameQuestion, questionArr, answerArr);
export default startFourthGame;
