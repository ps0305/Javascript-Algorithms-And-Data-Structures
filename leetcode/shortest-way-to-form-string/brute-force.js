/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function(source, target) {
  let nSeqs = 0;
  for (let i = 0; i < target.length; ) {
    const n = match(target, i, source);
    if (n === 0) {
      return -1;
    }
    i += n;
    nSeqs += 1;
  }
  return nSeqs;
};

function match(target, start, source) {
  let i = start;
  for (let j = 0; j < source.length; j++) {
    if (source[j] === target[i]) {
      i += 1;
    }
  }
  return i - start;
}
