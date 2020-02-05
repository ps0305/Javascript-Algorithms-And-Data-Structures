/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s, start = 0, end = s.length, position = findParentheses(s)) {
  let output = '';
  for (let i = start; i < end; i++) {
    if (s[i] === '(') {
      const str = reverseParentheses(s, i + 1, position[i], position);
      output += reverse(str);
      i = position[i];
    } else {
      output += s[i];
    }
  }
  return output;
};

function findParentheses(s) {
  const position = {};
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      position[stack.pop()] = i;
    }
  }
  return position;
}

function reverse(s) {
  let output = '';
  for (const c of s) {
    output = c + output;
  }
  return output;
}
