// person.mjs
var Terminal = require("./terminal.js");
class Person {
  constructor(name, age, gender, input) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.input = input || Terminal.set(this);
    // console.log(this.input.name);
    // this.input.event();
  }
}
let p1 = new Person("James", 23, "Male");
