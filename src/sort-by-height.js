const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArray = arr.slice();
  newArray.sort((a, b) => a - b);
  // а - отсортированный массив без -1
  let a = newArray.filter((el) => el !== -1);
  let result = [];
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(-1);
    } else {
      result.push(a[j]);
      j++;
    }
  }
  return result;
}

module.exports = {
  sortByHeight,
};
