const unsortedArrayZero = [
  517, 285, 552, 644, 59, 511, 5, 624, 654, 74, 650, 416, 551, 217, 154, 180,
  668, 521, 294,
];
// copy array before sorting to check the results at the end
const unsortedArray = Array.from(unsortedArrayZero);

function myQuickSort(array) {
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
function quickSort(array, start, end) {
  // base
  if (end - start + 1 <= 1) {
    return array;
  }

  let pivot = array[end];
  let lastSwitch = start;

  for (let i = start; i < end; i++) {
    if (array[i] < pivot) {
      let tmp = array[lastSwitch];
      array[lastSwitch] = array[i];
      array[i] = tmp;
      lastSwitch++;
    }
  }
  // switch pivot value where the lastSwitch "pointer" is
  array[end] = array[lastSwitch];
  array[lastSwitch] = pivot;

  quickSort(array, start, lastSwitch - 1);
  quickSort(array, lastSwitch + 1, end);

  return array.toString();
}
// console.log(myQuickSort(unsortedArrayZero));
console.log(unsortedArrayZero.toString());
console.log(quickSort(unsortedArrayZero, 0, unsortedArrayZero.length));
