const readline = require('readline');

// Create an interface for reading from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check if a number is odd or even
function checkOddEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Get input from the user
rl.question("Enter a number: ", function(userInput) {
  // Convert the input to a number
  let number = parseInt(userInput);

  // Check if the input is a valid number
  if (!isNaN(number)) {
    // Check if the number is odd or even
    let result = checkOddEven(number);

    // Print the result
    console.log(`The number ${number} is ${result}.`);

    // Close the interface
    rl.close();
  } else {
    console.log("Invalid input. Please enter a valid number.");

    // Close the interface
    rl.close();
  }
});
