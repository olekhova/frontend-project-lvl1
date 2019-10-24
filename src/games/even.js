import createRandomInteger from '../random';
import runGame from '../engine';

const gameQuestion = 'Answer "yes" if number even otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const createGameEven = () => {
  const numberForQuestion = createRandomInteger(0, 100);
  const correctAnswer = isEven(numberForQuestion) ? 'yes' : 'no';
  return [gameQuestion, numberForQuestion, correctAnswer];
};

const runGameEven = () => runGame(createGameEven);

export default runGameEven;
