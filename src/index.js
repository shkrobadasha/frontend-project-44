import readlineSync from 'readline-sync';

export const getRandomItem = (item) => Math.floor(Math.random() * (item));

export const getRandomNumber = () => {
  // const number = 101;
  const number = 10;
  return getRandomItem(number);
};

export const mainFunctionOfGame = (gameQuestion, questionArr, answerArr) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameQuestion}`);
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const currentQuestion = questionArr[i];
    console.log(`Question: ${currentQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = answerArr[i];
    if (userAnswer === correctAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      break;
    }
  }
  if (counter === 3) {
    return `Congratulations, ${userName}!`;
  }
  return `Let's try again, ${userName}!`;
};
