const unsortedArrayZero = [
  0, 1, 2, 3, 5, 6, 8, 9, 0, 1, 3, 4, 6, 7, 9, 0, 1, 3, 4, 5, 6, 7, 8, 9,
];
// copy array before sorting to check the results at the end
const unsortedArray = Array.from(unsortedArrayZero);

function bucketSort(array) {
  const counts = [0, 0, 0];

  for (let i = 0; i < array.length; i++) {
    counts[array[i]] += 1;
  }

  let i = 0;
  for (let n = 0; n < counts.length; n++) {
    for (let j = 0; j < counts[n]; j++) {
      array[i] = n;
      i++;
    }
  }
  return array;
}
function insertInDOM(element = []) {
  const arrayLength = element.length;
  const appElement = document.getElementById("app");

  // appElement.textContent = typeof element !== 'string' ? element : element;
  element.forEach((item, index) => {
    const div = document.createElement("div");
    div.textContent = `${index}-> ${item}`;
    appElement.appendChild(div);
  });
}
// console.log(myQuickSort(unsortedArrayZero));
console.log(unsortedArrayZero.toString());
console.log(bucketSort(unsortedArrayZero));

insertInDOM([unsortedArray, unsortedArrayZero]);
