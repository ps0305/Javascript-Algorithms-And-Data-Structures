/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

const trim = (str) => {
  if (str.length <= 1) {
    return str;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '0') {
      return str.substring(i);
    }
  }
  return '0';
};

const toIntArray = (str) => {
  return str
    .split('')
    .map((c) => parseInt(c))
    .reverse();
};

const toOutput = (arr) => {
  return trim(arr.reverse().join(''));
};

var addStrings = function(num1, num2) {
  const n = Math.max(num1.length, num2.length) + 1;
  const arr1 = toIntArray(num1);
  const arr2 = toIntArray(num2);
  const arr = [];
  let c = 0;
  for (let i = 0; i < n; i++) {
    const sum = (arr1[i] || 0) + (arr2[i] || 0) + c;
    arr.push(sum % 10);
    c = Math.floor(sum / 10);
  }
  return toOutput(arr);
};
