/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */

const helper = (num, target, start, sum, pre, str, output = []) => {
  if (start >= num.length) {
    if (sum === target && str) {
      output.push(str);
    }
    return output;
  }
  for (let length = 1; length <= num.length - start; length++) {
    const n = parseInt(num.substring(start, start + length));
    if (num[start] === '0' && length > 1) continue;
    if (start === 0) {
      helper(num, target, start + length, sum + n, n, str + n, output);
      continue;
    }
    helper(num, target, start + length, sum + n, n, str + '+' + n, output);
    helper(num, target, start + length, sum - n, -n, str + '-' + n, output);
    helper(num, target, start + length, sum - pre + pre * n, pre * n, str + '*' + n, output);
  }
  return output;
};

var addOperators = function(num, target) {
  return helper(num, target, 0, 0, 0, '');
};
