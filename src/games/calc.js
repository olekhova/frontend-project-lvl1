import { randomNumber, randOperation } from '../random';

const gameQuestion = 'What is the result of the expression?';

const calc = (operation, arg1, arg2) => {
  if (operation === '+') {
    return arg1 + arg2;
  }
  if (operation === '-') {
    return arg1 - arg2;
  }
  return arg1 * arg2;
};

const gameCalc = () => {
  const arg1 = randomNumber(100);
  const arg2 = randomNumber(100);
  const op = randOperation();
  const answer = calc(op, arg1, arg2);
  return [gameQuestion, `Question: ${arg1} ${op} ${arg2}`, ans => Number(ans) === answer, answer];
};

export default gameCalc;
