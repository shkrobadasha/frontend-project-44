import { getRandomNumber, startGame } from '../index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const getDataOfExpression = () => {
  const result = [];
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  result.push(firstNumber, secondNumber);
  return result;
};

function resultOfExpression(arrOfData) {
  let [firstNumber, secondNumber] = arrOfData;
  while ((firstNumber !== 0) && (secondNumber !== 0)) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  return firstNumber + secondNumber;
}

const getExpression = (arrOfData) => {
  const [firstNumber, secondNumber] = arrOfData;
  return `${firstNumber} ${secondNumber}`;
};

const getQuestion = (data) => getExpression(data);

const getAnswer = (data) => String(resultOfExpression(data));

const gamePare = () => {
  const data = getDataOfExpression();
  const result = [];
  const question = getQuestion(data);
  const answer = getAnswer(data);
  result.push(question, answer);
  return result;
};

const startBrainGcd = () => startGame(gameQuestion, gamePare);
export default startBrainGcd;
