const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.repeatTimes ||= 1;
  options.additionRepeatTimes ||= 0;

  if (!(typeof str === 'string' || str instanceof String))
    str = new String(str);

  if (options.addition) options.additionRepeatTimes ||= 1;
  if (!(typeof options.addition === 'string' || options.addition instanceof String))
    options.addition = new String(options.addition);

  options.separator ||= '+';
  options.separator = new String(options.separator);

  options.additionSeparator ||= '|';
  options.additionSeparator = new String(options.additionSeparator);

  return Array(options.repeatTimes)
    .fill(
      str
      + (Array(options.additionRepeatTimes)
        .fill(options.addition)
        .join(options.additionSeparator)))
    .join(options.separator);
}

module.exports = {
  repeater
};
