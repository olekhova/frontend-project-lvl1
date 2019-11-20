import createRandomInteger from '../random';
import runGame from '../engine';

const gameDescription = 'What is the result of the expression?';

const calculate = (operation, arg1, arg2) => {
  switch (operation) {
    case '+':
      return arg1 + arg2;
    case '-':
      return arg1 - arg2;
    case '*':
      return arg1 * arg2;
    default:
      return null;
  }
};

const operations = ['+', '-', '*'];

const createGameCalc = () => {
  const firstArgument = createRandomInteger(0, 100);
  const secondArgument = createRandomInteger(0, 100);
  const operation = operations[createRandomInteger(0, operations.length - 1)];
  const correctAnswer = String(calculate(operation, firstArgument, secondArgument));
  const question = `${firstArgument} ${operation} ${secondArgument}`;
  const gameCalc = [question, correctAnswer];
  return gameCalc;
};

const runGameCalc = () => runGame(gameDescription, createGameCalc);

export default runGameCalc;
