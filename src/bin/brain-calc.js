#!/usr/bin/env node
import { userName, userAnswer } from '..';

const MainFunction = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  const name = userName();
  console.log(`Hello, ${name}!`);
  const trueAnswer = (op, a, b) => {
    if (op === '+') {
      return a + b;
    }
    if (op === '-') {
      return a - b;
    }
    return a * b;
  };
  let i = 0;
  while (i < 3) {
    const arg1 = Math.floor(Math.random() * 100);
    const arg2 = Math.floor(Math.random() * 100);

    const arrayRandOperation = () => {
      const arr = ['+', '-', '*'];
      const rand = Math.floor(Math.random() * arr.length);
      return arr[rand];
    };
    const op = arrayRandOperation();
    console.log(`Question: ${arg1}${op}${arg2}`);
    const answer = Number(userAnswer());
    if (answer === trueAnswer(op, arg1, arg2)) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was  "${trueAnswer(op, arg1, arg2)}". Let's try again, ${name}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};

MainFunction();
