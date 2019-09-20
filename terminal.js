// terminal.mjs
class Terminal {
  constructor() {
    this.cells = [];
    this.mesh = [];
  }
  get(propName) {
    try {
      //Define the variable to store the index position of cells
      let finalIndex = "";

      //Find the index position of the property
      this.cells.forEach(cell => {
        let index = cell.indexOf(propName);
        if (index !== -1) {
          finalIndex = index;
        }
      });

      //Check if the finalIndex is there
      if (finalIndex >= 0) {
        //Find the values by index
        const finalData = this.mesh.map(data => data[finalIndex]);
        console.log(finalData);
      } else {
        throw new Error(`No property named ${propName} found!`);
      }
    } catch (msg) {
      console.error(msg);
    }
  }
  set(...output) {
    //Create a new ref object
    const data = Object.assign({}, ...output);

    //Set the keys in a 2-D array structure
    this.cells.push(Object.keys(data));

    //Set the values in a 2-D array structure
    this.mesh.push(Object.values(data));
  }
}
const instance = new Terminal();

// Singleton
Object.freeze(instance);

module.exports = instance;
