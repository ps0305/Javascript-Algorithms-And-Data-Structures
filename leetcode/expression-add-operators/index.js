/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
  const output = [];
  for (let i = 1; i <= num.length; i++) {
    const str = num.substring(0, i);
    const n = parseInt(str);
    if (isValid(str, n)) {
      helper(num, target, i, n, str, n, output);
    }
  }
  return output;
};

function helper(num, target, start, pre, selected, sum, output) {
  if (start >= num.length) {
    if (sum === target) {
      output.push(selected);
    }
    return;
  }
  for (let i = start + 1; i <= num.length; i++) {
    const str = num.substring(start, i);
    const n = parseInt(str);
    if (isValid(str, n)) {
      helper(num, target, i, n, selected + '+' + str, sum + n, output);
      helper(num, target, i, -n, selected + '-' + str, sum - n, output);
      helper(num, target, i, pre * n, selected + '*' + str, sum - pre + pre * n, output);
    }
  }
}

function isValid(str, n) {
  if (str.startsWith('0')) {
    return str.length === 1;
  }
  return true;
}
