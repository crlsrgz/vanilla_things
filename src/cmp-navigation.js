export default function NavigationMenu() {
  const links = [
    "/",
    "elf",
    "bubble-sort",
    "insertion-sort",
    "merge-sort",
    "quick-sort",
    "bucket-sort",
    "queue",
    "stack",
    "recursion-one",
  ];

  const navigation = document.getElementById("navigation-cmp");
  // console.log(navigation);

  const linksLength = links.length;
  // console.log(linksLength)
  for (let i = 0; i < linksLength; i++) {
    const divElement = document.createElement("div");
    const linkElement = document.createElement("a");
    if (links[i] === "/") {
      linkElement.textContent = "Home";
      linkElement.href = `${links[i]}`;
    } else {
      linkElement.textContent = links[i];
      linkElement.href = `/sorting/${links[i]}.html`;
    }
    divElement.appendChild(linkElement);
    navigation.appendChild(divElement);
  }
}
