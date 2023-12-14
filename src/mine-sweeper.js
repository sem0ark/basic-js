const { NotImplementedError } = require('../extensions/index.js');

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
  const n = matrix.length, m = matrix[0].length;

  const result = new Array(n).fill(null);

  for (let i = 0; i < n; i++) {
    result[i] = new Array(m).fill(0);

    for (let j = 0; j < m; j++) {
      let s = 0;

      if (i > 0) s += matrix[i - 1][j];
      if (j > 0) s += matrix[i][j - 1];
      if (i < n - 1) s += matrix[i + 1][j];
      if (j < m - 1) s += matrix[i][j + 1];

      if (i > 0 && j > 0) s += matrix[i - 1][j - 1];
      if (i > 0 && j < m - 1) s += matrix[i - 1][j + 1];
      if (i < n - 1 && j > 0) s += matrix[i + 1][j - 1];
      if (i < n - 1 && j < m - 1) s += matrix[i + 1][j + 1];

      result[i][j] += s;
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
