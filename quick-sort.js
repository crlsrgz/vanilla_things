const unsortedArrayZero = [
  517, 285, 552, 644, 59, 511, 5, 624, 654, 74, 650, 416, 551, 217, 154, 180,
  668, 521, 294,
];
// copy array before sorting to check the results at the end
const unsortedArray = Array.from(unsortedArrayZero);

function quickSort(array) {
  const arrayLength = array.length;
  let indexPointer = 0;
  let switchPointer = 0;

  while (indexPointer < arrayLength - 1) {
    if (array[indexPointer] < array[arrayLength - 1]) {
      const tempValue = array[switchPointer];
      array[switchPointer] = array[indexPointer];
      array[indexPointer] = tempValue;
      switchPointer++;
      indexPointer++;
    } else {
      indexPointer++;
    }
  }
  // POinter
  const tempValue = array[switchPointer];
  array[switchPointer] = array[arrayLength - 1];
  array[arrayLength - 1] = tempValue;

  return array;
}

console.log(quickSort(unsortedArrayZero));
