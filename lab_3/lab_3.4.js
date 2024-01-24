function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
  
    // Compare elements from both arrays and merge
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    // Add remaining elements from arr1
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    // Add remaining elements from arr2
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  // Example usage
  const sortedArray1 = [1, 3, 5, 7, 9];
  const sortedArray2 = [2, 4, 6, 8, 10];
  const mergedArray = mergeSortedArrays(sortedArray1, sortedArray2);
  console.log(`Merged array: ${mergedArray}`);
  