export default function insertInDOM(element = []) {
  const arrayLength = element.length;
  const appElement = document.getElementById("app");
  // if (unsortedArray) {
  //   const div = document.createElement("div");
  //   div.textContent = `U-> ${unsortedArray}`;
  //   appElement.appendChild(div);
  // }
  element.forEach((item, index) => {
    const div = document.createElement("div");
    div.textContent = `${index}-> ${item}`;
    appElement.appendChild(div);
  });
}
