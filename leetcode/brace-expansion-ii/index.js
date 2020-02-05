/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(str, start = 0, end = str.length, map = findBraces(str)) {
  const stack = [['']];
  for (let i = start; i < end; i++) {
    if (str[i] === '{') {
      const top = stack.pop();
      const result = braceExpansionII(str, i + 1, map[i], map);
      stack.push(product(top, result));
      i = map[i];
    } else if (str[i] === ',') {
      stack.push(['']);
    } else {
      const top = stack.pop();
      stack.push(product(top, [str[i]]));
    }
  }
  const output = new Set();
  for (const arr of stack) {
    for (const val of arr) {
      output.add(val);
    }
  }
  return [...output].sort();
};

function product(arr1, arr2) {
  const output = [];
  for (const val1 of arr1) {
    for (const val2 of arr2) {
      output.push(val1 + val2);
    }
  }
  return output;
}

function findBraces(str) {
  const map = {};
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      stack.push(i);
    } else if (str[i] === '}') {
      map[stack.pop()] = i;
    }
  }
  return map;
}
