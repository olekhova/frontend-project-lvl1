#!/usr/bin/env node
import { userName, userAnswer } from '..';
import { question, brainName } from '../games/prime';

const mainFunction = () => {
  console.log('Welcome to the Brain Games!');
  console.log(brainName());
  const name = userName();
  console.log(`Hello, ${name}!`);
  const howMany = 3;
  let i = 0;
  while (i < howMany) {
    const task = question();
    console.log(task[0]);
    const correctAnswer = task[1];
    const answer = userAnswer();
    if (correctAnswer(answer)) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was  "${task[2]}". Let's try again, ${name}!`);
      break;
    }
    if (i === howMany) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};
mainFunction();
