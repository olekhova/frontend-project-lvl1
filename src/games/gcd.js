import { randomNumber } from '../random';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const gcd = (arg1, arg2) => {
  let x = arg1;
  let y = arg2;
  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  return x + y;
};

const gameGcd = () => {
  const arg1 = randomNumber(100);
  const arg2 = randomNumber(100);
  const answer = gcd(arg1, arg2);
  return [gameQuestion, `Question: ${arg1} ${arg2}`, (ans) => Number(ans) === answer, answer];
};

export default gameGcd;
