/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let l = n.toString().length;
  let result = 0;

  for (let i = 0; i < l; i++) {
    const str_n = n.toString();
    const left_part = str_n.slice(0, i);
    const right_part = str_n.slice(i + 1);
    result = Math.max(result, Number.parseInt(left_part + right_part));
  }

  return result;
}

module.exports = {
  deleteDigit
};
