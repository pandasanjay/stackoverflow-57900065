var Terminal = require("./terminal.js");
class Job {
  constructor(name, location, salary, input) {
    this.name = name;
    this.location = location;
    this.salary = salary;
    this.input = input || Terminal.set(this);
    // console.log(this.input.name);
  }
}
let a1 = new Job("Web Developer", "New York", 40000);
