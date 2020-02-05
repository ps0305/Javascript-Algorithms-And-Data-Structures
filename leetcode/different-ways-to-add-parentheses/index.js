/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  return helper(input, 0, input.length);
};

function helper(s, start, end, cache = {}) {
  const key = s.substring(start, end);
  if (key in cache) {
    return cache[key];
  }
  const output = [];
  for (let i = start; i < end; i++) {
    if (isOperator(s[i])) {
      const left = helper(s, start, i);
      const right = helper(s, i + 1, end);
      for (const nLeft of left) {
        for (const nRight of right) {
          output.push(compute(nLeft, nRight, s[i]));
        }
      }
    }
  }
  if (!output.length) {
    output.push(parseInt(s.substring(start, end)));
  }
  cache[key] = output;
  return output;
}

function isOperator(c) {
  return c === '+' || c === '-' || c === '*';
}

function compute(n1, n2, op) {
  if (op === '+') {
    return n1 + n2;
  } else if (op === '-') {
    return n1 - n2;
  } else if (op === '*') {
    return n1 * n2;
  }
}
