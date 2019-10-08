export const brainName = () => 'What number is missing in the progression?';

const progression = (num, x, index, n = 10) => {
  let pr = '';
  let v = num;
  for (let i = 0; i <= n; i += 1) {
    if (i === index) {
      pr += '..';
    } else {
      pr += String(v);
    }
    v += x;
    if (i !== n) {
      pr += ', ';
    }
  }
  return pr;
};

export const question = () => {
  const start = Math.floor(Math.random() * 100);
  const step = Math.floor(Math.random() * 10);
  const randomIndex = Math.floor(Math.random() * 10);
  const trueAnswer = start + step * randomIndex;
  return [progression(start, step, randomIndex), ans => Number(ans) === trueAnswer, trueAnswer];
};
