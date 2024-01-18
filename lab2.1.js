const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate BMI
function calculateBMI(weight, height) {
  return weight / (height * height);
}

// Function to categorize BMI
function categorizeBMI(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obesity";
  }
}

// Get input from the user
rl.question("Enter height in meters (m): ", (height) => {
  rl.question("Enter weight in kilograms (kg): ", (weight) => {
    // Convert input to numbers
    height = parseFloat(height);
    weight = parseFloat(weight);

    // Check if the input is valid
    if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
      // Calculate BMI
      let bmi = calculateBMI(weight, height);

      // Categorize BMI
      let category = categorizeBMI(bmi);

      // Print the result
      console.log(`BMI: ${bmi.toFixed(2)}`);
      console.log(`Category: ${category}`);

      rl.close();
    } else {
      console.log("Invalid input. Please enter valid height and weight.");
      rl.close();
    }
  });
});
g