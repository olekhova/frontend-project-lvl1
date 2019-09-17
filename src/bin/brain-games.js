#!/usr/bin/env node
import { userName, userAnswer } from '..';
import { question } from '../games/brain-calc';

const mainFunction = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  const name = userName();
  console.log(`Hello, ${name}!`);
  let i = 0;
  while (i < 3) {
    const task = question();
    console.log(task[0]);
    const correctAnswer = task[1];
    const answer = Number(userAnswer());
    if (answer === correctAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was  "${correctAnswer}". Let's try again, ${name}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};
mainFunction();
