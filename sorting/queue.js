import "../index.css";
import NavigationMenu from "../src/cmp-navigation";
NavigationMenu();

import insertInDOM from "../src/insertDOM";

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(item) {
    const node = { value: item };
    this.length++;

    if (!this.tail) {
      this.tail = node;
      this.head = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }
  deque() {
    if (!this.head) {
      return undefined;
    }
    this.length--;
    const head = this.head;
    this.head = this.head.next;
    return head.value;
  }
  peek() {
    return this.head ? this.head.value : undefined;
  }
}

const qq = new Queue();
const arrForDOM = [];

console.log(qq.length);
console.log(qq.peek());
qq.enqueue(5);
console.log(JSON.stringify(qq.tail));
console.log(qq.length);
console.log(qq.peek());
qq.enqueue(6);
console.log(qq.length);
console.log(qq.peek());
