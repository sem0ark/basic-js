const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;

  const chars = members
    .filter((v) => (typeof v === 'string' || v instanceof String) && (v.trim(' ') !== ''))
    .map((v) => v.trim(' ')[0].toUpperCase());
  chars.sort();

  return chars.join('');
}

module.exports = {
  createDreamTeam
};
