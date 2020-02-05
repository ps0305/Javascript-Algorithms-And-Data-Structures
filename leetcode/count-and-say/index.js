/**
 * @param {number} n
 * @return {string}
 */

const count = (str, i) => {
  let n = 0;
  let j = i;
  while (str[j] === str[i]) {
    n += 1;
    j += 1;
  }
  return n;
};

var countAndSay = function(n) {
  let output = '1';
  for (let i = 1; i < n; i++) {
    let next = '';
    for (let j = 0; j < output.length; j++) {
      const m = count(output, j);
      next += m + output[j];
      j += m - 1;
    }
    output = next;
  }
  return output;
};
