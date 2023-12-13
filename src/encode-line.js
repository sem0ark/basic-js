const { NotImplementedError } = require('../extensions/index.js');

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
  let char = '';
  let count = 0;
  let result = '';

  for (let c of str + "#") {
    if (char === c) count++;
    else {
      if (count === 1) result += char;
      else if (count > 1) result += count.toString() + char;

      char = c;
      count = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
