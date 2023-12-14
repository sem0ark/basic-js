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
  if (!(arr instanceof Array)) throw Error("'arr' parameter must be an instance of the Array!");

  const n = arr.length;
  const result = [];
  const to_add = new Array(n).fill(1);

  const commands = [
    '--discard-prev',
    '--discard-next',
    '--double-prev',
    '--double-next'
  ]

  for (let i = 0; i < n; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        if (i > 0 && to_add[i - 1] > 0) to_add[i - 1] -= 1;
        break;
      case '--discard-next':
        if (i < n - 1 && to_add[i + 1] > 0) to_add[i + 1] -= 1;
        break;
      case '--double-prev':
        if (i > 0 && to_add[i - 1] > 0) to_add[i - 1]++;
        break;
      case '--double-next':
        if (i < n - 1 && to_add[i + 1] > 0) to_add[i + 1]++;
        break;
      default: break;
    }
  }

  for (let i = 0; i < n; i++) {
    if (!commands.includes(arr[i])) {
      for (; to_add[i] > 0; to_add[i]--)
        result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform
};
