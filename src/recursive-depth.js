const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, count = 1) {
    return (count =
      arr.length !== 0
        ? Math.max(
            ...arr.map((item) => {
              return (item = Array.isArray(item)
                ? this.calculateDepth(item, count + 1)
                : count);
            })
          )
        : count);
  }
};
