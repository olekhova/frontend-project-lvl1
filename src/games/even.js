import { randomNumber } from '../random';

const gameQuestion = 'Answer "yes" if number even otherwise answer "no".';

const gameEven = () => {
  const num = randomNumber(100);
  const answer = num % 2 === 0 ? 'yes' : 'no';
  return [gameQuestion, `Question: ${num}`, (ans) => answer === ans, answer];
};

export default gameEven;
