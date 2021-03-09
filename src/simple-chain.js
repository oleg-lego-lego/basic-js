const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = " ") {
    this.chain.push(`( ${new String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (position >= 1 && position <= this.getLength()) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error();
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let resultStr =
      this.getLength() > 1 ? this.chain.join("~~") : this.chain[0];
    this.chain = [];
    return resultStr;
  },
};

module.exports = chainMaker;
