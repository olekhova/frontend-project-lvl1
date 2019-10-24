import createRandomInteger from '../random';
import runGame from '../engine';

const gameQuestion = 'What number is missing in the progression?';

const constructProgression = (numStart, step, emptyPlace) => {
  let progr = '';
  let numStep = numStart;
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === emptyPlace) {
      progr += '..';
    } else {
      progr += String(numStep);
    }
    numStep += step;
    if (i !== progressionLength - 1) {
      progr += ', ';
    }
  }
  return progr;
};

const createGameProgression = () => {
  const start = createRandomInteger(0, 100);
  const step = createRandomInteger(0, 9);
  const randomIndex = createRandomInteger(0, 9);
  const correctAnswer = start + step * randomIndex;
  return [gameQuestion, constructProgression(start, step, randomIndex), correctAnswer];
};

const runGameProgression = () => runGame(createGameProgression);

export default runGameProgression;
