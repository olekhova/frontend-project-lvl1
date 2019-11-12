import readlineSync from 'readline-sync';

const runGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const howMany = 3;
  for (let i = 0; i < howMany; i += 1) {
    const [gameDescription, question, correctAnswer] = game();
    console.log(gameDescription);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was  "${correctAnswer}". Let's try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
export default runGame;
