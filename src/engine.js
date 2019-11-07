import readlineSync from 'readline-sync';

const userName = () => readlineSync.question('May I have your name? ');
const userAnswer = () => readlineSync.question('Your answer: ');

const runGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = userName();
  console.log(`Hello, ${name}!`);
  const howMany = 3;
  for (let i = 0; i < howMany; i += 1) {
    const task = game();
    console.log(task[0]);
    console.log(`Question: ${task[1]}`);
    const answer = userAnswer();
    const correctAnswer = task[2];
    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was  "${task[2]}". Let's try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
export default runGame;
