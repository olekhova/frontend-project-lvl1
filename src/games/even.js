export const brainName = () => 'Answer "yes" if number even otherwise answer "no".';

const trueAnswer = (x) => {
  if ((x % 2) === 0) return 'yes';
  return 'no';
};

export const question = () => {
  const number = Math.floor(Math.random() * 100);
  return [`Question: ${number}`, ans => ans === trueAnswer(number), trueAnswer(number)];
};
