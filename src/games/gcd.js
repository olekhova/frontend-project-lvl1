import createRandomInteger from '../random';
import runGame from '../engine';

const gameDescription = 'Find the greatest common divisor of given numbers.';

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
  const firstArgument = createRandomInteger(0, 100);
  const secondArgument = createRandomInteger(0, 100);
  const correctAnswer = String(findGcd(firstArgument, secondArgument));
  const question = `${firstArgument} ${secondArgument}`;
  const gameGcd = [question, correctAnswer];
  return gameGcd;
};

const runGameGcd = () => runGame(gameDescription, createGameGcd);

export default runGameGcd;
