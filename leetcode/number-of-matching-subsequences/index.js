/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
  const map = createMap(S);
  let nMatching = 0;
  for (const word of words) {
    if (isMatched(map, word)) {
      nMatching += 1;
    }
  }
  return nMatching;
};

function isMatched(map, word) {
  let j = -1;
  for (const c of word) {
    if (!(c in map)) {
      return false;
    }
    j = upperBound(map[c], j);
    if (j < 0) {
      return false;
    }
  }
  return true;
}

function createMap(str) {
  const map = {};
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (!(c in map)) map[c] = [];
    map[c].push(i);
  }
  return map;
}

function upperBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target >= arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left < arr.length ? arr[left] : -1;
}
