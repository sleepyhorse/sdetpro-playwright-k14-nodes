function sortArray(arr) {
    // Use the sort() method with a compare function
    arr.sort(function (a, b) {
      return a - b;
    });
  
    return arr;
  }
  
  // Function to sort an integer array from min to max using bubble sort algorithm
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              // Swap arr[j] and arr[j+1]
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }

  return arr;
}

// Test the function
const inputArray = [12, 34, 1, 16, 28];
console.log("Input array:", inputArray);

const sortedArray = bubbleSort(inputArray.slice()); // Make a copy to avoid modifying the original array
console.log("Sorted array:", sortedArray);
  
