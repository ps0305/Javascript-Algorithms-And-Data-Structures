/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */

var addOperators = function(num, target, sum = 0, start = 0, diff = 0, selected = '', output = []) {
  if (start >= num.length) {
    if (sum === target) {
      output.push(selected);
    }
    return output;
  }
  for (let i = start; i < num.length; i++) {
    if (i > start && num[start] === '0') continue;
    const n = parseInt(num.slice(start, i + 1));
    if (start === 0) {
      addOperators(num, target, sum + n, i + 1, n, selected + n, output);
    } else {
      addOperators(num, target, sum + n, i + 1, n, selected + '+' + n, output);
      addOperators(num, target, sum - n, i + 1, -n, selected + '-' + n, output);
      addOperators(num, target, sum - diff + diff * n, i + 1, diff * n, selected + '*' + n, output);
    }
  }
  return output;
};
