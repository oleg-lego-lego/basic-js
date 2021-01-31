const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let nameArray = members.filter((x) => typeof x === "string");
  let firstLettersOfNames = nameArray
    .reduce((acc, item) => {
      return acc.concat(item.trim()[0].toUpperCase());
    }, [])
    .sort()
    .join("");
  return firstLettersOfNames;
};
