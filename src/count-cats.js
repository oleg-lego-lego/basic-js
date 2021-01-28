const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let matrixFilter = matrix
    .reduce((acc, val) => acc.concat(val), [])
    .filter((x) => x === "^^").length;
  return +matrixFilter;
};
