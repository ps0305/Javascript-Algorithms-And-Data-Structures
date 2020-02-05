/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  const map = createMap(t);
  let j = -1;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!(c in map)) {
      return false;
    }
    j = upperBound(map[c], j);
    if (j < 0) {
      return false;
    }
  }
  return true;
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
  return left < arr.length ? arr[left] : -1;
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
