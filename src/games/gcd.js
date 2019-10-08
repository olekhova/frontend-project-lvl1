export const brainName = () => 'Find the greatest common divisor of given numbers.';

const trueAnswer = (a, b) => {
  let x = a;
  let y = b;
  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  return x + y;
};

export const question = () => {
  const arg1 = Math.floor(Math.random() * 100);
  const arg2 = Math.floor(Math.random() * 100);
  return [`Question: ${arg1} ${arg2}`, ans => Number(ans) === trueAnswer(arg1, arg2), trueAnswer(arg1, arg2)];
};
