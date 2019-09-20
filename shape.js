var Terminal = require("./terminal.js");
// shape.mjs
class Shape {
  constructor(name, size, color, input) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.input = input || Terminal.set(this);
  }
}
let s1 = new Shape("Triangle", 20, "Blue");
