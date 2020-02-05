/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s, start = 0, end = s.length - 1, map = findParentheses(s)) {
  const nums = [];
  let op = 1;
  for (let i = start; i <= end; i++) {
    if (s[i] === '(') {
      const result = calculate(s, i + 1, map[i] - 1, map);
      nums.push(op * result);
      i = map[i];
    } else if (s[i] === '+') {
      op = 1;
    } else if (s[i] === '-') {
      op = -1;
    } else if (isNumber(s[i])) {
      const str = parseNum(s, i);
      const result = parseInt(str);
      nums.push(op * result);
      i += str.length - 1;
    }
    if (nums.length >= 2) {
      const result = nums.shift() + nums.shift();
      nums.push(result);
    }
  }
  return nums.reduce((acc, cur) => acc + cur, 0);
};

function isNumber(str) {
  return /[0-9]+/.test(str);
}

function parseNum(s, start) {
  let i = start;
  let output = '';
  while (isNumber(s[i])) {
    output += s[i];
    i += 1;
  }
  return output;
}

function findParentheses(s) {
  const map = {};
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      const left = stack.pop();
      map[left] = i;
    }
  }
  return map;
}
