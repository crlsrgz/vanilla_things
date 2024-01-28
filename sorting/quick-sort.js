import "../index.css";
import NavigationMenu from "../src/cmp-navigation";
NavigationMenu();

const unsortedArrayZero = [
  517, 285, 552, 644, 59, 511, 5, 624, 654, 74, 650, 416, 551, 217, 154, 180,
  668, 521, 294,
];
// copy array before sorting to check the results at the end
const unsortedArray = Array.from(unsortedArrayZero);

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
console.log(quickSort(unsortedArrayZero, 0, unsortedArrayZero.length));

insertInDOM([unsortedArray, unsortedArrayZero]);
