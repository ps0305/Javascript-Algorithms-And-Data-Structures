/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  const arr = words.map(f).sort((a, b) => a - b);
  return queries.map((query) => {
    const j = upperBound(arr, f(query));
    return words.length - j;
  });
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

function f(word) {
  const freq = {};
  for (const c of word) {
    freq[c] = (freq[c] || 0) + 1;
  }
  for (let i = 0; i < 26; i++) {
    const c = String.fromCharCode('a'.charCodeAt(0) + i);
    if (c in freq) {
      return freq[c];
    }
  }
}
