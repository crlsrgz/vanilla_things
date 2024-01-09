const unsorted = [5, 0 ,4,9,3,1,10];

function insertionSort(array){
  const arrayLength = array.length;
  for (let i = 1; i < arrayLength; i++){
    let j = i - 1;
    
    while ( j >= 0 && array[j + 1 ] < array[j]){
      let temp = array[j + 1];
      array[j + 1] = array[j];
      array[j] = temp;
      j--;
    }
    console.log(`step ${i}=`, array.toString());
  }
  return array;
}


console.log('unsorted',unsorted);
const sorted = insertionSort(unsorted);
console.log('final array', sorted);
