import { say } from 'cowsay';

console.log('You are here');
const currentDirectory = process.cwd();
setTimeout(() => console.log(currentDirectory), 1000);

console.log(say({text: 'Yes I really mean it'}));