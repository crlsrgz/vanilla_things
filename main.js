
import { setupCounter } from "./counter.js";

const text = "hello";

async function getData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(apiUrl);
    let apiQuotes = await response.json();

    console.log(apiQuotes);

    return apiQuotes;
  } catch (error) {
    console.log("error " + error);
  }
}

const names = await getData();

names.map((element) => console.log(element.name));

setupCounter(document.querySelector("#counter"));
