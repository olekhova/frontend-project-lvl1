import createRandomInteger from '../random';
import runGame from '../engine';

const gameQuestion = 'What number is missing in the progression?';

const constructProgression = (startNumber, step, emptyPlace) => {
  let progression = '';
  let stepNumber = startNumber;
  const progressionLength = 10;
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
  const randomIndex = createRandomInteger(0, 9);
  const correctAnswer = start + step * randomIndex;
  const textProgression = constructProgression(start, step, randomIndex);
  const gameProgression = [gameQuestion, textProgression, correctAnswer];
  return gameProgression;
};

const runGameProgression = () => runGame(createGameProgression);

export default runGameProgression;
