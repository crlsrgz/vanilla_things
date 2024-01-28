// Function to merge two sorted parts of array GeeksforGeeks
function mergeGG(arr, left, middle, right) {
  // Length of both sorted sub-arrays
  let l1 = middle - left + 1;
  let l2 = right - middle;
  // Create new subarrays
  let arr1 = new Array(l1);
  let arr2 = new Array(l2);
  // Assign values in subarrays
  for (let i = 0; i < l1; ++i) {
    arr1[i] = arr[left + i];
  }
  for (let i = 0; i < l2; ++i) {
    arr2[i] = arr[middle + 1 + i];
  }
  // To traverse and modify main array
  let i = 0,
    j = 0,
    k = left;
  // Assign the smaller value for sorted output
  while (i < l1 && j < l2) {
    if (arr1[i] < arr2[j]) {
      arr[k] = arr1[i];
      ++i;
    } else {
      arr[k] = arr2[j];
      j++;
    }
    k++;
  }
  // Update the remaining elements
  while (i < l1) {
    arr[k] = arr1[i];
    i++;
    k++;
  }
  while (j < l2) {
    arr[k] = arr2[j];
    j++;
    k++;
  }
}

// Function to implement merger sort in javaScript
export function mergeSortGG(arr, left, right) {
  if (left >= right) {
    return;
  }
  // Middle index to create subarray halves
  let middle = left + parseInt((right - left) / 2);
  // Apply mergeSortGG to both the halves
  mergeSortGG(arr, left, middle);
  mergeSortGG(arr, middle + 1, right);
  // Merge both sorted parts
  mergeGG(arr, left, middle, right);
}

/* ═══  ═══ */
// https://javascript.plainenglish.io/implementing-merge-sort-in-javascript-4ea74f92bbea
function mergeExOne(arr1, arr2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      merged.push(arr1[index1]);
      index1++;
    } else {
      merged.push(arr2[index2]);
      index2++;
    }
  }
  while (index1 < arr1.length) {
    merged.push(arr1[index1]);
    index1++;
  }
  while (index2 < arr2.length) {
    merged.push(arr2[index2]);
    index2++;
  }
  return merged;
}

export function mergeSortExOne(arr) {
  if (arr.length < 2) return arr; //base case
  let mid = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, mid);
  let secondHalf = arr.slice(mid);
  return mergeExOne(mergeSortExOne(firstHalf), mergeSortExOne(secondHalf));
}

/* ═══  ═══ */
// example from https://stackabuse.com/merge-sort-in-javascript/
function mergeSA(left, right) {
  let arr = [];
  // Break out of loop if any one of the array becomes empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}

export function mergeSortSA(array) {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return mergeSA(mergeSortSA(left), mergeSortSA(array));
}

/* ═══  ═══ */
function myMerge(arrayOne, arrayTwo) {
  let arrayMerged = [];
  let indexOne = 0;
  let indexTwo = 0;

  while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
    if (arrayOne[indexOne] < arrayTwo[indexTwo]) {
      arrayMerged.push(arrayOne[indexOne]);
      indexOne++;
    } else {
      arrayMerged.push(arrayTwo[indexTwo]);
      indexTwo++;
    }
  }

  while (indexOne < arrayOne.length) {
    arrayMerged.push(arrayOne[indexOne]);
    indexOne++;
  }
  while (indexTwo < arrayTwo.length) {
    arrayMerged.push(arrayTwo[indexTwo]);
    indexTwo++;
  }

  return arrayMerged;
}

export function myMergeSort(array) {
  if (array.length === 1) return array;

  let middleIndex = Math.floor(array.length / 2);
  let arrayLeft = array.slice(0, middleIndex);
  let arrayRight = array.slice(middleIndex);

  return myMerge(myMergeSort(arrayLeft), myMergeSort(arrayRight));
}
