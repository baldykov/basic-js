module.exports = function repeater(str, options) {
  let addition = "";
  if (options.addition !== undefined) {
    addition = new Array(options.additionRepeatTimes || 1)
      .fill(`${options.addition}`)
      .join(options.additionSeparator || "|");
  }
  return new Array(options.repeatTimes || 1)
    .fill(`${str}${addition}`)
    .join(options.separator || "+");
};

//repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
//=>'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
