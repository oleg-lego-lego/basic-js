const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "",
  } = options;

  let arr = Array(repeatTimes).fill(str);

  let arrayAdd = Array(additionRepeatTimes)
    .fill(addition)
    .map((s, i) =>
      i < additionRepeatTimes - 1
        ? `${addition}${additionSeparator}`
        : `${addition}`
    )
    .join("");

  return arr.map((s) => `${s}${arrayAdd}`).join(separator);
};
