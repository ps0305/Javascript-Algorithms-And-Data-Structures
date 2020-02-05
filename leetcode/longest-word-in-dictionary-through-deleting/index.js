/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
  const map = createMap(s);
  let max = '';
  for (const w of d) {
    if (isMatch(s, map, w) && w.length >= max.length) {
      max = w.length > max.length || w < max ? w : max;
    }
  }
  return max;
};

function isMatch(s, map, w) {
  let j = 0;
  for (let i = 0; i < w.length; i++) {
    if (!(w[i] in map)) {
      return false;
    }
    const arr = map[w[i]];
    const index = lowerBound(arr, j);
    if (index >= arr.length) {
      return false;
    }
    j = arr[index] + 1;
  }
  return true;
}

function createMap(str) {
  const map = {};
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] in map)) map[str[i]] = [];
    map[str[i]].push(i);
  }
  return map;
}

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
