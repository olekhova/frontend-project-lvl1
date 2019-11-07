import createRandomInteger from '../random';
import runGame from '../engine';

const gameQuestion = 'What is the result of the expression?';

const calculate = (operation, arg1, arg2) => {
  switch (operation) {
    case '+':
      return arg1 + arg2;
    case '-':
      return arg1 - arg2;
    case '*':
      return arg1 * arg2;
    default:
      return undefined;
  }
};

const arrayOperation = ['+', '-', '*'];

const createGameCalc = () => {
  const numberForQuestion1 = createRandomInteger(0, 100);
  const numberForQuestion2 = createRandomInteger(0, 100);
  const operationForQuestion = arrayOperation[createRandomInteger(0, arrayOperation.length - 1)];
  const correctAnswer = calculate(operationForQuestion, numberForQuestion1, numberForQuestion2);
  const textQuestion = `${numberForQuestion1} ${operationForQuestion} ${numberForQuestion2}`;
  const gameCalc = [gameQuestion, textQuestion, correctAnswer];
  return gameCalc;
};

const runGameCalc = () => runGame(createGameCalc);

export default runGameCalc;
