import createRandomInteger from '../random';
import runGame from '../engine';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const createGamePrime = () => {
  const numberForQuestion = createRandomInteger(0, 100);
  const correctAnswer = isPrime(numberForQuestion) ? 'yes' : 'no';
  return [gameQuestion, numberForQuestion, correctAnswer];
};

const runGamePrime = () => runGame(createGamePrime);

export default runGamePrime;
