/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const freq = words.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const arr = Object.keys(freq);
  const compare = (k1, k2) => {
    if (freq[k1] === freq[k2]) {
      return k1 < k2 ? -1 : 1;
    }
    return freq[k2] - freq[k1];
  };
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const p = partition(arr, left, right, compare);
    if (k === p + 1) {
      return arr.slice(0, k).sort(compare);
    } else if (k <= p) {
      right = p - 1;
    } else {
      left = p + 1;
    }
  }
  return [];
};

function partition(arr, start, end, compare) {
  const p = end;
  let j = start;
  for (let i = start; i < end; i++) {
    if (compare(arr[i], arr[p]) < 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j += 1;
    }
  }
  [arr[p], arr[j]] = [arr[j], arr[p]];
  return j;
}
