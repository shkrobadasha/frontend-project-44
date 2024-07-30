import { getRandomNumber, mainFunctionOfGame } from '../index.js';

function isNumberEven(currentNumber) {
  if (currentNumber % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionArr = () => {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    arr.push(getRandomNumber());
  }
  return arr;
};

const getAnswerArr = (arrOfData) => {
  const answerArr = [];
  /* eslint-disable-next-line */
  for (const item of arrOfData) {
    answerArr.push(isNumberEven(item));
  }
  return answerArr;
};

const questionArr = getQuestionArr();
const answerArr = getAnswerArr(questionArr);

const startBrainEven = () => console.log(mainFunctionOfGame(gameQuestion, questionArr, answerArr));
export default startBrainEven;
