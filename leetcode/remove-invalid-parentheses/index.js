/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  const output = [];
  const queue = [s];
  const visited = new Set();
  while (queue.length) {
    const str = queue.shift();
    if (isValid(str)) {
      output.push(str);
    }
    if (!output.length) {
      for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === ')') {
          const next = str.substring(0, i) + str.substring(i + 1);
          if (!visited.has(next)) {
            visited.add(next);
            queue.push(next);
          }
        }
      }
    }
  }
  return output;
};

function isValid(str) {
  let count = 0;
  for (const c of str) {
    if (c === '(') {
      count += 1;
    } else if (c === ')') {
      count -= 1;
    }
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
}
