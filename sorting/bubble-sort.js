import "../index.css";

import NavigationMenu from "../src/cmp-navigation";
NavigationMenu();

const unsortedArrayZero = [
  517, 294, 552, 644, 59, 511, 5, 624, 654, 74, 285, 416, 551, 217, 154, 180,
  668, 521, 650,
];
// copy array before sorting to check the results at the end
const unsortedArray = Array.from(unsortedArrayZero);

function bubbleSort(array) {
  for (let i = 0; i < array.length; ++i) {
    for (let j = 0; j < array.length - i - 1; ++j) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}

function insertInDOM(element = []) {
  const arrayLength = element.length;
  const appElement = document.getElementById("app");

  const div = document.createElement("div");
  div.textContent = `U-> ${unsortedArray}`;
  appElement.appendChild(div);
  // appElement.textContent = typeof element !== 'string' ? element : element;
  element.forEach((item, index) => {
    const div = document.createElement("div");
    div.textContent = `${index}-> ${item}`;
    appElement.appendChild(div);
  });
}
const sorted = bubbleSort(unsortedArrayZero);
console.log("final array", sorted);
insertInDOM([sorted]);
