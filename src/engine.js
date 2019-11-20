import readlineSync from 'readline-sync';

const roundsCount = 3;

const runGame = (gameDescription, createGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = createGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. `);
      console.log(`Correct answer was  "${correctAnswer}". Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default runGame;
