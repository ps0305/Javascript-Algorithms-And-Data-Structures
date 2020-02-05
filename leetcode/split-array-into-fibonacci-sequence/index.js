/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
  const output = [];
  helper(S, 0, output);
  return output;
};

function helper(s, start = 0, output = []) {
  if (start >= s.length) {
    return start === s.length && output.length >= 3;
  }
  for (let length = 1; length <= s.length; length++) {
    const str = s.substring(start, start + length);
    /* if a substring is not a valid number, its following substring is also invalid */
    if (!isValidNumber(str)) {
      break;
    }
    const n = parseInt(str);
    output.push(n);
    if (isValidSequence(output) && helper(s, start + length, output)) {
      return true;
    }
    output.pop();
  }
  return false;
}

const MAX = 2 ** 31 - 1;

function isValidSequence(arr) {
  if (arr.length <= 2) {
    return true;
  }
  const i = arr.length - 1;
  return arr[i - 2] + arr[i - 1] === arr[i];
}

function isValidNumber(str) {
  const n = parseInt(str);
  /* if number startsWith 0, it must be zero */
  if (str[0] === '0') {
    return n === 0;
  }
  return n >= 0 && n <= MAX;
}
