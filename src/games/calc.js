import createRandomInteger from '../random';
import runGame from '../engine';

const createRandomOperation = () => {
  const arr = ['+', '-', '*'];
  const randOp = Math.floor(Math.random() * arr.length);
  return arr[randOp];
};

const gameQuestion = 'What is the result of the expression?';

const calculate = (operation, arg1, arg2) => {
  if (operation === '+') {
    return arg1 + arg2;
  }
  if (operation === '-') {
    return arg1 - arg2;
  }
  return arg1 * arg2;
};

const createGameCalc = () => {
  const numberForQuestion1 = createRandomInteger(0, 100);
  const numberForQuestion2 = createRandomInteger(0, 100);
  const operationForQuestion = createRandomOperation();
  const correctAnswer = calculate(operationForQuestion, numberForQuestion1, numberForQuestion2);
  const textQuestion = `${numberForQuestion1} ${operationForQuestion} ${numberForQuestion2}`;
  return [gameQuestion, textQuestion, correctAnswer];
};

const runGameCalc = () => runGame(createGameCalc);

export default runGameCalc;
