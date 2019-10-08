export const brainName = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};


export const question = () => {
  const number = Math.floor(Math.random() * 100);
  return [number, ans => ans === isPrime(number), isPrime(number)];
};
