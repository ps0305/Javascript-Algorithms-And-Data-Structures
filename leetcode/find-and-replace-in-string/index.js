/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(S, indexes, sources, targets) {
  const arr = sort(indexes, sources, targets);
  let output = '';
  let pre = 0;
  for (const [start, source, target] of arr) {
    const isMatched = S.substring(start, start + source.length) === source;
    if (isMatched) {
      output += S.substring(pre, start);
      output += target;
      pre = start + source.length;
    }
  }
  if (pre < S.length) {
    output += S.substring(pre);
  }
  return output;
};

function sort(indexes, sources, targets) {
  const m = indexes.length;
  const arr = [];
  for (let i = 0; i < m; i++) {
    arr.push([indexes[i], sources[i], targets[i]]);
  }
  return arr.sort((a, b) => a[0] - b[0]);
}
