import readlineSync from 'readline-sync';

export const userName = () => readlineSync.question('May I have your name? ');
export const userAnswer = () => readlineSync.question('Your answer: ');
