/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const count = {};
  const a = [];

  for (const v of names) {
    if (v in count) count[v] += 1;
    else count[v] = 1;

    const result = v + (count[v] === 1 ? '' : `(${count[v] - 1})`);

    if (result !== v) {
      if (result in count) count[result] += 1;
      else count[result] = 1;
    }

    a.push(result);
  };
  return a;
}

module.exports = {
  renameFiles
};
