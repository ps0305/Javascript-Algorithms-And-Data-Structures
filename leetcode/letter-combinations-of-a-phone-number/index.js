/**
 * @param {string} digits
 * @return {string[]}
 */

const map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

var letterCombinations = function(digits, index = 0, selected = '', output = []) {
  if (selected.length >= digits.length) {
    if (selected) {
      output.push(selected);
    }
    return output;
  }
  for (const c of map[digits[index]]) {
    letterCombinations(digits, index + 1, selected + c, output);
  }
  return output;
};
