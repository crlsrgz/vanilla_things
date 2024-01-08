const unsortedArray = [517, 294, 552, 644, 59, 511, 5, 624, 654, 74, 285, 416, 551, 217, 755, 154, 180, 668, 521, 650];

// example from https://stackabuse.com/merge-sort-in-javascript/ 
function mergeSA(left, right) {
    let arr = []
    // Break out of loop if any one of the array becomes empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

function mergeSortSA(array) {
  const half = array.length / 2
  
  // Base case or terminating case
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)
  return mergeSA(mergeSortSA(left),mergeSortSA(array))
}

function mergeGG(array, left, middle, right){
  let lengthOne = middle - left + 1;
  let lengthTwo = right - middle;

  let arrayOne = [];
  let arrayTwo = [];

  for (let i = 0; i < lengthOne; i++){
    arrayOne[i] = array[left + i];
  }
}























function insertInDOM(element){
  const appElement = document.getElementById('app');
 
     // appElement.textContent = typeof element !== 'string' ? element : element;
     appElement.textContent = element;
}











const exampleOne = mergeSortSA(unsortedArray)
insertInDOM(exampleOne);