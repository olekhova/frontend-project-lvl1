import { userName, userAnswer } from './user';

const runGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = userName();
  console.log(`Hello, ${name}!`);
  const howMany = 3;
  let i = 0;
  while (i < howMany) {
    const task = game();
    console.log(task[0]);
    console.log(task[1]);
    const correctAnswer = task[2];
    const answer = userAnswer();
    if (correctAnswer(answer)) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was  "${task[3]}". Let's try again, ${name}!`);
      break;
    }
    if (i === howMany) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};
export default runGame;
