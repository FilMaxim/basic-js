const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    console.log(this.arr);
    return this
  },
  removeLink(position) {
    if (position > 0 &&  typeof position !== "string" && position < this.arr.length) {
      this.arr.splice(position - 1, 1);
      return this
    } else {
      this.arr = []
       throw new Error("You can\'t remove incorrect link!");
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this
  },
  finishChain() {
    let str = this.arr.join('~~');
    this.arr = [];
    return str;
  }
};

module.exports = {
  chainMaker,
};
