function findMaxValue(arr) {
    if (arr.length === 0) {
      return undefined; // Return undefined for an empty array
    }
  
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return max;
  }
  
  function findMinValue(arr) {
    if (arr.length === 0) {
      return undefined; // Return undefined for an empty array
    }
  
    let min = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  
    return min;
  }
  
 // Example usage
 const numbers = [9, 4, 9, 1, 1];
 const maxValue = findMaxValue(numbers);
 console.log(`Maximum value: ${maxValue}`);

  const minValue = findMinValue(numbers);
  console.log(`Minimum value: ${minValue}`);
  