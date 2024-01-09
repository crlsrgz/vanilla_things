import mergeSortSA from "./merge-sort-sa.js";
import mergeSortExOne from "./merge-sort-exampleOne.js";
import mergeSortGG from "./merge-sort-gg.js";

const unsortedArrayZero = [
  517, 294, 552, 644, 59, 511, 5, 624, 654, 74, 285, 416, 551, 217, 755, 154,
  180, 668, 521, 650,
];
const unsortedArrayOne = [
  517, 294, 552, 644, 59, 511, 5, 624, 654, 74, 285, 416, 551, 217, 755, 154,
  180, 668, 521, 650,
];
const unsortedArrayTwo = [
  517, 294, 552, 644, 59, 511, 5, 624, 654, 74, 285, 416, 551, 217, 755, 154,
  180, 668, 521, 650,
];

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

const sortedZero = mergeSortSA(unsortedArrayZero);
const sortedOne = mergeSortExOne(unsortedArrayOne);
mergeSortGG(unsortedArrayTwo, 0, unsortedArrayTwo.length - 1);
const sortedTwo = Array.from(unsortedArrayTwo);
// Display output

const examples = [unsortedArrayOne, sortedZero, sortedOne, sortedTwo];
insertInDOM(examples);
