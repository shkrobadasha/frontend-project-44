import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const mainFunctionOfGame = (gameQuestion, gamePare) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameQuestion}`);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const currentGamePare = gamePare();
    const [currentQuestion, correctAnswer] = currentGamePare;
    console.log(`Question: ${currentQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return `Let's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

const startGame = (gameQuestion, gamePare) => (console.log(
  mainFunctionOfGame(gameQuestion, gamePare),
));

export default startGame;
