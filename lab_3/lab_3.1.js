function countOddEvenNumbers(arr) {
    // Initialize counters
    let oddCount = 0;
    let evenCount = 0;
  
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // Check if the element is odd or even
      if (arr[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    // Return an object with the counts
    return {
      odd: oddCount,
      even: evenCount,
    };
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = countOddEvenNumbers(numbers);
  
  console.log(`Number of odd numbers: ${result.odd}`);
  console.log(`Number of even numbers: ${result.even}`);
  
