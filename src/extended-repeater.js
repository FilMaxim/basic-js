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
function repeater( str, options ) {
  let arrStr =[]
  let arrAddition = [];
  if(!options.additionSeparator) {options.additionSeparator = '|'};
  if(!options.separator) {options.separator = '+'};
  if(!options.repeatTimes) {options.repeatTimes = 1};
  if(!options.additionRepeatTimes) {options.additionRepeatTimes = 1};
  if(!options.addition && options.addition !== false && options.addition !== null) {options.addition = ''};

  for (let i = 0; i < options.additionRepeatTimes; i++) {
     arrAddition.push(`${options.addition}`)
  };
  let strAddition = arrAddition.join(`${options.additionSeparator}`);
  for (let i = 0; i < options.repeatTimes; i++) {
      arrStr.push(str + strAddition)
    }
  let strNew = arrStr.join(`${options.separator}`);
  return strNew
}

module.exports = {
  repeater
};
