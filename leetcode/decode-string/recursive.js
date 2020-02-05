/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s, start = 0, end = s.length, brackets = findBrackets(s)) {
  let output = '';
  for (let i = start; i < end; i++) {
    if (isNumber(s[i])) {
      const numberStr = parseNumber(s, i);
      const n = parseInt(numberStr);
      i += numberStr.length;
      const decodedStr = decodeString(s, i + 1, brackets[i], brackets);
      output += decodedStr.repeat(n);
      i = brackets[i];
    } else {
      output += s[i];
    }
  }
  return output;
};

function findBrackets(s) {
  const brackets = {};
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') {
      stack.push(i);
    } else if (s[i] === ']') {
      brackets[stack.pop()] = i;
    }
  }
  return brackets;
}

function isNumber(c) {
  return /[0-9]/.test(c);
}

function parseNumber(s, start) {
  let i = start;
  while (isNumber(s[i])) {
    i += 1;
  }
  return s.substring(start, i);
}
