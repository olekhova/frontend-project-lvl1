#!/usr/bin/env node
import { userName, userAnswer } from '..';

const MainFunction = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = userName();
  console.log(`Hello, ${name}!`);
  const trueAnswer = (x) => {
    if ((x % 2) === 0) return 'yes';
    return 'no';
  };
  let i = 0;
  while (i < 3) {
    const num = Math.floor(Math.random() * 1000);
    console.log(`Question: ${num}`);
    const answer = userAnswer();
    if (answer === trueAnswer(num)) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was  "${trueAnswer(num)}". Let's try again, ${name}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};

MainFunction();
