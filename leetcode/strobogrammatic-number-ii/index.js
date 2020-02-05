/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
  const numbers = [[], ['0', '1', '8'], ['00', '11', '69', '88', '96']];
  for (let i = 3; i <= n; i++) {
    numbers.push(helper(numbers[i - 2], numbers[2]));
  }
  return numbers[n].filter(isValid);
};

function helper(arr, arrOf2) {
  const output = [];
  for (const [head, tail] of arrOf2) {
    for (const number of arr) {
      output.push(head + number + tail);
    }
  }
  return output;
}

function isValid(str) {
  if (str.length > 1 && str.startsWith('0')) {
    return false;
  }
  return true;
}
