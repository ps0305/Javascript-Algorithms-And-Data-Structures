/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const map = {};
  for (let i = 0; i < S.length; i++) {
    map[S[i]] = i;
  }
  const output = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < S.length; i++) {
    end = Math.max(end, map[S[i]]);
    if (i === end) {
      output.push(i - start + 1);
      start = i + 1;
    }
  }
  return output;
};
