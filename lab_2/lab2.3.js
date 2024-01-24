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

// Function to suggest adjustments
function suggestAdjustments(category) {
  switch (category) {
    case "Underweight":
      return "You may want to increase your weight for a healthier BMI.";
    case "Normal weight":
      return "Maintain your weight for a healthy BMI.";
    case "Overweight":
      return "Consider losing weight for a healthier BMI.";
    case "Obesity":
      return "It's recommended to consult with a healthcare professional for weight management.";
    default:
      return "";
  }
}

// Get input from the user
rl.question("Enter height in meters (m): ", function(height) {
  rl.question("Enter weight in kilograms (kg): ", function(weight) {
    // Convert input to numbers
    height = parseFloat(height);
    weight = parseFloat(weight);

    // Check if the input is valid
    if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
      // Calculate BMI
      let bmi = calculateBMI(weight, height);

      // Categorize BMI
      let category = categorizeBMI(bmi);

      // Suggest adjustments
      let adjustmentSuggestion = suggestAdjustments(category);

      // Print the result
      console.log(`BMI: ${bmi.toFixed(2)}`);
      console.log(`Category: ${category}`);
      console.log(adjustmentSuggestion);

      // Close the interface
      rl.close();
    } else {
      console.log("Invalid input. Please enter valid height and weight.");

      // Close the interface
      rl.close();
    }
  });
});
