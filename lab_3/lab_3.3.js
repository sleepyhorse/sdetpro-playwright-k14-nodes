function sortArray(arr) {
    // Use the sort() method with a compare function
    arr.sort(function (a, b) {
      return a - b;
    });
  
    return arr;
  }
  
  // Example usage
  const numbers = [9, 5, 6, 9, 1];
  const sortedArray = sortArray(numbers);
  console.log(`Sorted array: ${sortedArray}`);
  