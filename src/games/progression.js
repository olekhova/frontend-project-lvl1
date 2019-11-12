import createRandomInteger from '../random';
import runGame from '../engine';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;


const constructProgression = (startNumber, step, emptyPlace) => {
  let progression = '';
  let stepNumber = startNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === emptyPlace) {
      progression += '..';
    } else {
      progression += String(stepNumber);
    }
    stepNumber += step;
    if (i !== progressionLength - 1) {
      progression += ', ';
    }
  }
  return progression;
};

const createGameProgression = () => {
  const start = createRandomInteger(0, 100);
  const step = createRandomInteger(0, 9);
  const randomIndex = createRandomInteger(0, progressionLength - 1);
  const correctAnswer = String(start + step * randomIndex);
  const textProgression = constructProgression(start, step, randomIndex);
  const gameProgression = [gameDescription, textProgression, correctAnswer];
  return gameProgression;
};

const runGameProgression = () => runGame(createGameProgression);

export default runGameProgression;
