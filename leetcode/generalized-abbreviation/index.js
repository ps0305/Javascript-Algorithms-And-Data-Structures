/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
  return helper(word, 0, new Array(word.length).fill(false), []);
};

function helper(word, start, selected, output) {
  output.push(map(word, selected));
  for (let i = start; i < word.length; i++) {
    selected[i] = true;
    helper(word, i + 1, selected, output);
    selected[i] = false;
  }
  return output;
}

function map(word, selected) {
  let output = '';
  let start = 0;
  let i = 0;
  while (i < word.length) {
    if (!selected[i]) {
      output += word[i];
      start = i + 1;
      i += 1;
      continue;
    }
    while (selected[i]) {
      i += 1;
    }
    output += i - start;
  }
  return output;
}
