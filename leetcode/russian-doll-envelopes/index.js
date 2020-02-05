/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  sort(envelopes);
  const byHeight = ([w, h]) => h;
  return findLIS(envelopes, byHeight);
};

function sort(envelopes) {
  envelopes.sort(([w1, h1], [w2, h2]) => {
    if (w1 !== w2) {
      return w1 - w2;
    }
    return h2 - h1;
  });
}

function findLIS(arr, get) {
  const seq = [];
  for (const el of arr) {
    const val = get(el);
    if (!seq.length || val > seq[seq.length - 1]) {
      seq.push(val);
    } else {
      const index = lowerBound(seq, val);
      seq[index] = val;
    }
  }
  return seq.length;
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
