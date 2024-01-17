class Stack{
constructor(){
    this.head = undefined;
    this.length = 0;
}
push(item) {
    const node = {value : item};
    this.length++;

    if (!this.head){
        this.head = node;
        return
    }
    node.prev = this.head;
    this.head = node;

}

pop(){
    this.length = Math.max(0, this.length -1)
    if(this.length === 0) {
        const head = this.head;
        this.head = undefined;
        return this.head ? this.head.value : undefined;
    }

    const head = this.head;
    this.head = head.prev;
    return head.value;

}
peek(){
    return this.head ? this.head.value : undefined;
}

}

const s = new Stack;

console.log(s.length);
console.log(s.peek());

s.push(5)
console.log(s.length);
console.log(s.peek());
s.push(6)
console.log(s.length);
console.log(s.peek());
console.log(s.prev);

