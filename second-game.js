import readlineSync from 'readline-sync';

function getRandomNumber() {
    return Math.floor(Math.random() * (101));
}

function isNumberEven(number) {
    if (number % 2 === 0) {
        return 'yes';
    }
    return 'no';
}

const askAboutNumbers = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
    let counter = 0;
    for (let i = 0; i < 3; i += 1) {
        const number = getRandomNumber();
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const isCurNumberEven = isNumberEven(number);
        if (userAnswer === isCurNumberEven) {
            counter += 1;
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isCurNumberEven}'`);
            break;
        }
    }
    if (counter === 3) {
        return `Congratulations, ${userName}!`;
    }
    return `Let's try again, ${userName}!`;
};

export default askAboutNumbers;
