const { NotImplementedError } = require('../extensions/index.js');

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
  const to_sort = arr.filter((x) => x !== -1);
  to_sort.sort((a, b) => a - b);

  return arr.map((v) => {
    if (v === -1) return v;
    return to_sort.shift();
  });
}

module.exports = {
  sortByHeight
};
