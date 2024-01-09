// Function to merge two sorted parts of array
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
export default function mergeSortGG(arr, left, right) {
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
