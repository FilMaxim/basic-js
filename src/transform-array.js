const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');

  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  let newArray = arr.slice();
  if (arr[0] === '--discard-prev' || arr[0] === '--double-prev') {
    newArray.splice(0, 1)
  }
    if (arr[arr.length - 1] === '--double-next' || arr[arr.length - 1] === '--discard-next') {
      newArray.splice(arr.length -1, 1)
      console.log(newArray)
  }
  let result = [];
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === '--discard-prev') {
        result.pop()
    } else if (newArray[i] === '--discard-next') {
      i++
      if (newArray[i + 1] = '--double-prev' || newArray[i] === '--discard-prev') {
        i++
      }
    } else if (newArray[i] === '--double-next') {
      result.push(newArray[i+1])
    } else if (newArray[i] === '--double-prev') {
      result.push(newArray[i-1])
    } else {
      result.push(newArray[i])
    }
  }
  return result

}

module.exports = {
  transform
};
