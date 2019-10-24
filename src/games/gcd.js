import createRandomInteger from '../random';
import runGame from '../engine';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const findGcd = (arg1, arg2) => {
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

const createGameGcd = () => {
  const numberForQuestion1 = createRandomInteger(0, 100);
  const numberForQuestion2 = createRandomInteger(0, 100);
  const correctAnswer = findGcd(numberForQuestion1, numberForQuestion2);
  return [gameQuestion, `${numberForQuestion1} ${numberForQuestion2}`, correctAnswer];
};

const runGameGcd = () => runGame(createGameGcd);

export default runGameGcd;
