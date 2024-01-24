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
function suggestAdjustments(category,height,weight) {
    if (category === "Underweight") {
        const targetWeight = 18.5 * Math.pow(height, 2);
        // Check if weight is already greater than or equal to the target weight
        if (weight >= targetWeight) {
            return "Your weight is already within a healthy range.";
        }
        const adjustment = targetWeight - weight;
        return `Suggestion: Increase weight by ${adjustment.toFixed(2)} kg`;
      } else if (category === "Normal weight") {
        return "Suggestion: Maintain your current weight, it falls within the normal range.";
      } else if (category === "Overweight" || category === "Obesity") {
        const targetWeight = 24.9 * Math.pow(height, 2);
        const adjustment = weight - targetWeight;
        return `Suggestion: Decrease weight by ${adjustment.toFixed(2)} kg`;
      }
    }

// Get input from the user
let height, weight;
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
      let adjustmentSuggestion = suggestAdjustments(category,height,weight);

      // Print the result
      console.log(`BMI: ${bmi.toFixed(2)}`);
      console.log(`Category: ${category}`);
      console.log(`${adjustmentSuggestion}`);

      // Close the interface
      rl.close();
    } else {
      console.log("Invalid input. Please enter valid height and weight.");

      // Close the interface
      rl.close();
    }
  });
});
