// 1-stdin.js

// Create a readable stream for standard input (stdin)
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for their name
rl.question('Welcome to Holberton School, what is your name? ', (answer) => {
  // Process the input (convert to uppercase)
  const processedName = answer.trim().toUpperCase();

  // Display the result
  console.log(`Your name is: ${processedName}`);

  // Close the program
  console.log('This important software is now closing');
  rl.close();
});
