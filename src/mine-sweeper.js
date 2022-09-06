const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = [];

  for (let i = 0; i < matrix.length; i++) {
    arr.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      arr[i][j] = 0;
      //право
      if (matrix[i][j - 1] === true) {
        arr[i][j]++;
      }
      //лево
      if (matrix[i][j + 1] != undefined && matrix[i][j + 1] === true) {
        arr[i][j]++;
      }
      //низ
      if (matrix[i - 1] != undefined && matrix[i - 1][j] === true) {
        arr[i][j]++;
      }
      //вверх
      if (matrix[i + 1] != undefined && matrix[i + 1][j] === true) {
        arr[i][j]++;
      }
      //верхний правый угол
      if (matrix[i + 1] != undefined && matrix[i + 1][j + 1] === true) {
        arr[i][j]++;
      }
      //верхний левый угол
      if (matrix[i + 1] != undefined && matrix[i + 1][j - 1] === true) {
        arr[i][j]++;
      }
      //нижий правый угол
      if (matrix[i - 1] != undefined && matrix[i - 1][j - 1] === true) {
        arr[i][j]++;
      }
      //нижий левый угол
      if (matrix[i - 1] != undefined && matrix[i - 1][j + 1] === true) {
        arr[i][j]++;
      }
    }
  }
  return arr;
}

module.exports = {
  minesweeper,
};
