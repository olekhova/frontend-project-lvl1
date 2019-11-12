import createRandomInteger from '../random';
import runGame from '../engine';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const createGameEven = () => {
  const question = createRandomInteger(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const gameEven = [gameDescription, question, correctAnswer];
  return gameEven;
};

const runGameEven = () => runGame(createGameEven);

export default runGameEven;
