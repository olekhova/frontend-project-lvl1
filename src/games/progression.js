import createRandomInteger from '../random';
import runGame from '../engine';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const buildGameQuestion = (start, step, emptyPlace) => {
  let resultText = '';
  for (let i = 0; i < progressionLength; i += 1) {
    resultText = `${resultText}${i === emptyPlace ? '..' : String(start + i * step)} `;
  }
  return resultText;
};

const createGameProgression = () => {
  const start = createRandomInteger(0, 100);
  const step = createRandomInteger(0, 9);
  const hiddenMemberIndex = createRandomInteger(0, progressionLength - 1);
  const correctAnswer = String(start + step * hiddenMemberIndex);
  const gameQuestion = buildGameQuestion(start, step, hiddenMemberIndex);
  return [gameQuestion, correctAnswer];
};

const runGameProgression = () => runGame(gameDescription, createGameProgression);

export default runGameProgression;
