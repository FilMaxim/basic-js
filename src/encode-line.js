const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = `${str} `;
  let result = "";
  let count = 1;
  for (let i = 1; i < newStr.length; i++) {
    if (newStr[i] === newStr[i - 1]) {
      count++;
    } else {
      result += count === 1 ? newStr[i - 1] : count + newStr[i - 1];

      count = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
