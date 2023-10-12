const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (input) => {
  if (input.trim() !== '') {
    console.log(`Your name is: ${input}`);
    rl.close();
  } else {
    console.log('Por favor, introduce un nombre válido.');
  }
});

rl.on('close', () => {
  console.log('This important software is now closing');
});