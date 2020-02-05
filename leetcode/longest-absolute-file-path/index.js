/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  const stack = [];
  let max = 0;
  let i = 0;
  while (i < input.length) {
    const depth = getDepth(input, i);
    i += depth;
    const name = getName(input, i);
    i += name.length;
    while (depth < stack.length) {
      stack.pop();
    }
    stack.push(name);
    if (isFile(name)) {
      const length = stack.reduce((acc, cur) => acc + cur.length, 0) + stack.length - 1;
      max = Math.max(max, length);
    }
    i += 1;
  }
  return max;
};

const newLine = '\n';
const tab = '\t';

function getDepth(str, start) {
  let i = start;
  while (i < str.length && str[i] === tab) {
    i += 1;
  }
  return i - start;
}

function getName(str, start) {
  let i = start;
  while (i < str.length && str[i] !== newLine) {
    i += 1;
  }
  return str.substring(start, i);
}

function isFile(str) {
  return /.+\..+/.test(str);
}
