export const brainName = () => console.log('Answer "yes" if number even otherwise answer "no".');

const trueAnswer = (x) => {
  if ((x % 2) === 0) return 'yes';
  return 'no';
};

export const question = () => {
  const arg1 = Math.floor(Math.random() * 100);
  return [`Question: ${arg1}`, trueAnswer(arg1)];
};
