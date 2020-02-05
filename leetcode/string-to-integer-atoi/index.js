/**
 * @param {string} str
 * @return {number}
 */
const INT_MAX = 2 ** 31 - 1;
const INT_MIN = -(2 ** 31);

var myAtoi = function(str) {
  let output = null;
  let sign = null;
  let i = 0;
  while (str[i] === ' ') {
    i += 1;
  }
  while (isValid(str[i])) {
    if (str[i] === '+' || str[i] === '-') {
      if (sign !== null || (sign === null && output !== null)) {
        break;
      }
      sign = str[i] === '+' ? 1 : -1;
    } else {
      if (output === null) output = 0;
      output = output * 10 + parseInt(str[i]);
    }
    i += 1;
  }
  if (sign === null) {
    sign = 1;
  }
  if (output === null) {
    return 0;
  }
  if (sign > 0 && output > INT_MAX) {
    return INT_MAX;
  }
  if (sign < 0 && -output < INT_MIN) {
    return INT_MIN;
  }
  return sign * output;
};

function isValid(c) {
  return /[0-9|+|-]/.test(c);
}
