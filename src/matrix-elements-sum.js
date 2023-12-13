const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  let res = 0;
  for (let j = 0; j < m; j++) {
    let z = false;
    for (let i = 0; i < n; i++) {
      z = (matrix[i][j] === 0);
      if (z) break;
      res += matrix[i][j];
    }
    if (z) continue;
  }

  return res;
}

module.exports = {
  getMatrixElementsSum
};
