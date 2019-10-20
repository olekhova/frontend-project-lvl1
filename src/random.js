export const randomNumber = (N) => Math.floor(Math.random() * N);

export const randOperation = () => {
  const arr = ['+', '-', '*'];
  const randOp = Math.floor(Math.random() * arr.length);
  return arr[randOp];
};
