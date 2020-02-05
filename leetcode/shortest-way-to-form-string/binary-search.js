/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function(source, target) {
  const map = createMap(source);
  let i = -1;
  let nSeqs = 1;
  for (let j = 0; j < target.length; j++) {
    const c = target[j];
    if (!(c in map)) {
      return -1;
    }
    const index = upperBound(map[c], i);
    if (index >= map[c].length) {
      nSeqs += 1;
      i = map[c][0];
    } else {
      i = map[c][index];
    }
  }
  return nSeqs;
};

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
  return left;
}

function createMap(str) {
  const map = {};
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] in map)) map[str[i]] = [];
    map[str[i]].push(i);
  }
  return map;
}
