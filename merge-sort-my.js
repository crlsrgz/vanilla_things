function myMerge(arrayOne, arrayTwo) {
  let arrayMerged = []; 
  let indexOne = 0;
  let indexTwo = 0;

  while(indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
    if (arrayOne[indexOne] < arrayTwo[indexTwo]) {
      arrayMerged.push(arrayOne[indexOne]);
      indexOne++;
    } else {
      arrayMerged.push(arrayTwo[indexTwo]);
      indexTwo++;
    }
  }

  while(indexOne < arrayOne.length){
    arrayMerged.push(arrayOne[indexOne]);
    indexOne++;
  }
  while(indexTwo < arrayTwo.length){
    arrayMerged.push(arrayTwo[indexTwo]);
    indexTwo++;
  }
  
  return arrayMerged;
}

export default function myMergeSort(array) {
  if(array.length === 1) return array;

  let middleIndex = Math.floor(array.length / 2);
  let arrayLeft = array.slice(0, middleIndex);
  let arrayRight = array.slice(middleIndex);
  
  return myMerge(myMergeSort(arrayLeft) , myMergeSort(arrayRight))
}
