/**
 * @param {number} n
 * @return {string[]}
 */

const createNumbers = (arrs, pairs) => {
  const output = [];
  for (let i = 0; i < arrs.length; i++) {
    for (let j = 0; j < pairs.length; j++) {
      const arr = arrs[i].slice();
      arr.unshift(pairs[j][0]);
      arr.push(pairs[j][1]);
      output.push(arr);
    }
  }
  return output;
};

const isValidNumber = (str) => {
  if (str.length <= 1) {
    return true;
  }
  return str[0] !== '0';
};

const toValidOutput = (arr) => {
  return arr.map((s) => s.join('')).filter(isValidNumber);
};

const dp1 = [['1'], ['8'], ['0']];
const dp2 = [['1', '1'], ['6', '9'], ['9', '6'], ['8', '8'], ['0', '0']];

var findStrobogrammatic = function(n) {
  if (n === 1) {
    return toValidOutput(dp1);
  }
  if (n === 2) {
    return toValidOutput(dp2);
  }
  let x = dp1;
  let y = dp2;
  let output;
  for (let i = 3; i <= n; i++) {
    output = createNumbers(x, dp2);
    x = y;
    y = output;
  }
  return toValidOutput(output);
};
