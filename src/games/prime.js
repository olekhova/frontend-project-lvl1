import { randomNumber } from '../random';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const gamePrime = () => {
  const num = randomNumber(100);
  const answer = isPrime(num);
  return [gameQuestion, `Question: ${num}`, ans => ans === answer, answer];
};

export default gamePrime;
