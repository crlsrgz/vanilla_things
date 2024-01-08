class Elf {
  constructor(name, tool) {
    this.name = name;
    this.tool = tool;  
  }
  skill() {
    return `repairs with ${this.tool}`;
  }
}

const newElf = new Elf('Legolas', 'Bow');

console.log(newElf.tool);
