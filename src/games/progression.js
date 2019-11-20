import createRandomInteger from '../random';
import runGame from '../engine';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;


const buildGameQuestion = (start, step, emptyPlace) => {
  let text = '';
  let stepIndex = start;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === emptyPlace) {
      text = `${text}..`;
    } else {
      text = `${text}${String(stepIndex)}`;
    }
    stepIndex += step;
    if (i !== progressionLength - 1) {
      text = `${text}, `;
    }
  }
  return text;
};

const createGameProgression = () => {
  const start = createRandomInteger(0, 100);
  const step = createRandomInteger(0, 9);
  const randomIndex = createRandomInteger(0, progressionLength - 1);
  const correctAnswer = String(start + step * randomIndex);
  const gameQuestion = buildGameQuestion(start, step, randomIndex);
  return [gameQuestion, correctAnswer];
};

const runGameProgression = () => runGame(gameDescription, createGameProgression);

export default runGameProgression;
