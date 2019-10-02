export const brainName = () => console.log('What is the result of the expression?');

const trueAnswer = (o, a, b) => {
  if (o === '+') {
    return a + b;
  }
  if (o === '-') {
    return a - b;
  }
  return a * b;
};
/* export const rand = () => {
  const arg1 = Math.floor(Math.random() * 100);
  const arg2 = Math.floor(Math.random() * 100);

  const arrayRandOperation = () => {
    const arr = ['+', '-', '*'];
    const randOp = Math.floor(Math.random() * arr.length);
    return arr[randOp];
  };
  const op = arrayRandOperation();
  const task = `${op}, ${arg1}, ${arg2}`;
  return task;
  // const correctAnswer = trueAnswer(op, arg1, arg2);
};*/

export const question = () => {
  const arg1 = Math.floor(Math.random() * 100);
  const arg2 = Math.floor(Math.random() * 100);

  const arrayRandOperation = () => {
    const arr = ['+', '-', '*'];
    const randOp = Math.floor(Math.random() * arr.length);
    return arr[randOp];
  };
  const op = arrayRandOperation();
  return [`Question: ${arg1} ${op} ${arg2}`, trueAnswer(op, arg1, arg2)];
};
