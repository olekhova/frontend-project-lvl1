import createRandomInteger from '../random';
import runGame from '../engine';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const buildGameQuestion = (start, step, emptyPlace, length) => {
  let question = '';
  for (let i = 0; i < length; i += 1) {
    question = `${question}${i === emptyPlace ? '..' : start + i * step}`;
    question = `${question}${i === length - 1 ? '' : ', '}`;
  }
  return question;
};

const createGameProgression = () => {
  const start = createRandomInteger(0, 100);
  const step = createRandomInteger(0, 9);
  const hiddenMemberIndex = createRandomInteger(0, progressionLength - 1);
  const correctAnswer = String(start + step * hiddenMemberIndex);
  const gameQuestion = buildGameQuestion(start, step, hiddenMemberIndex, progressionLength);
  return [gameQuestion, correctAnswer];
};

const runGameProgression = () => runGame(gameDescription, createGameProgression);

export default runGameProgression;
