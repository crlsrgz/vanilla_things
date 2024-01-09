// https://javascript.plainenglish.io/implementing-merge-sort-in-javascript-4ea74f92bbea
function mergeExOne(arr1, arr2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      merged.push(arr1[index1]);
      index1++;
    } else {
      merged.push(arr2[index2]);
      index2++;
    }
  }
  while (index1 < arr1.length) {
    merged.push(arr1[index1]);
    index1++;
  }
  while (index2 < arr2.length) {
    merged.push(arr2[index2]);
    index2++;
  }
  return merged;
}

export default function mergeSortExOne(arr) {
  if (arr.length < 2) return arr; //base case
  let mid = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, mid);
  let secondHalf = arr.slice(mid);
  return mergeExOne(mergeSortExOne(firstHalf), mergeSortExOne(secondHalf));
}
