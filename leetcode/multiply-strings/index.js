/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (!num1 || !num2) {
    return '0';
  }
  const m = num1.length;
  const n = num2.length;
  const output = new Array(m + n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      output[i + j] += parseInt(num1[m - 1 - i]) * parseInt(num2[n - 1 - j]);
    }
  }
  let c = 0;
  for (let i = 0; i < output.length; i++) {
    const sum = output[i] + c;
    output[i] = sum % 10;
    c = Math.floor(sum / 10);
  }
  return trimZero(output.reverse()).join('');
};

function trimZero(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let i = 0;
  while (arr[i] === 0) {
    i += 1;
  }
  return i < arr.length ? arr.slice(i) : [0];
}
