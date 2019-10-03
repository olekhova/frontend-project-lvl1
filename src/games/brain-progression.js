export const brainName = () => 'What number is missing in the progression?';

const progression = (a, x, idx, n = 10) => {
  let r = '';
  let v = a;
  for (let i = 0; i <= n; i += 1) {
    if (i === idx) {
      r += '..';
    } else {
      r += String(v);
    }
    v += x;
    if (i !== n) {
      r += ', ';
    }
  }
  return r;
};

export const question = () => {
  const start = Math.floor(Math.random() * 100);
  const step = Math.floor(Math.random() * 10);
  const randomIndex = Math.floor(Math.random() * 10);
  const trueAnswer = start + step * randomIndex;
  return [progression(start, step, randomIndex), ans => Number(ans) === trueAnswer, trueAnswer];
};
