/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [[1, '']];
  for (let i = 0; i < s.length; i++) {
    if (isNumber(s[i])) {
      const numStr = parseNumber(s, i);
      stack.push([parseInt(numStr), '']);
      i += numStr.length - 1;
    } else if (s[i] === '[') {
      continue;
    } else if (s[i] === ']') {
      const [nRepeats, str] = stack.pop();
      const top = stack[stack.length - 1];
      top[1] += str.repeat(nRepeats);
    } else {
      const top = stack[stack.length - 1];
      top[1] += s[i];
    }
  }
  const [nRepeats, str] = stack.pop();
  return str.repeat(nRepeats);
};

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
