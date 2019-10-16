import { randomNumber } from '../random';

const gameQuestion = 'What number is missing in the progression?';

const progression = (numStart, step, emptyPlace, quantity = 10) => {
  let progr = '';
  let numStep = numStart;
  for (let i = 0; i <= quantity; i += 1) {
    if (i === emptyPlace) {
      progr += '..';
    } else {
      progr += String(numStep);
    }
    numStep += step;
    if (i !== quantity) {
      progr += ', ';
    }
  }
  return progr;
};

const gameProgression = () => {
  const start = randomNumber(100);
  const step = randomNumber(10);
  const randomIndex = randomNumber(10);
  const answer = start + step * randomIndex;
  return [gameQuestion, progression(start, step, randomIndex),
    ans => Number(ans) === answer, answer];
};

export default gameProgression();
