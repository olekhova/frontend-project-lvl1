import createRandomInteger from '../random';
import runGame from '../engine';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const createGamePrime = () => {
  const question = createRandomInteger(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const gamePrime = [question, correctAnswer];
  return gamePrime;
};

const runGamePrime = () => runGame(gameDescription, createGamePrime);

export default runGamePrime;
