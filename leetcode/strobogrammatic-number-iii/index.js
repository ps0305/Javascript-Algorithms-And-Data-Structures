/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */

const dp1 = ['0', '1', '8'];
const dp2 = ['00', '11', '69', '88', '96'];

var strobogrammaticInRange = function(low, high) {
  let x = dp1;
  let y = dp2;
  let n = count(dp1, low, high) + count(dp2, low, high);
  while (y[0].length <= high.length) {
    const arr = createNumbers(x);
    n += count(arr, low, high);
    x = y;
    y = arr;
  }
  return n;
};

function createNumbers(arr) {
  const output = [];
  for (const num of arr) {
    output.push('0' + num + '0');
    output.push('1' + num + '1');
    output.push('6' + num + '9');
    output.push('8' + num + '8');
    output.push('9' + num + '6');
  }
  return output;
}

function count(arr, low, high) {
  let n = 0;
  for (const str of arr) {
    if (!isValid(str)) continue;
    const num = parseInt(str);
    if (num >= low && num <= high) {
      n += 1;
    }
  }
  return n;
}

function isValid(str) {
  if (str[0] === '0') {
    return str.length <= 1;
  }
  return true;
}
