/**
 * @param {string} S
 * @return {string}
 */
var longestDupSubstring = function(S) {
  const arr = S.split('').map((c) => c.charCodeAt(0) - 'a'.charCodeAt(0));
  let left = 0;
  let right = S.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (findDuplicated(arr, mid) >= 0) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  const length = left - 1;
  const index = findDuplicated(arr, length);
  return index >= 0 ? S.substring(index, index + length) : '';
};

const base = 26;
const M = 2 ** 32;

function findDuplicated(arr, L) {
  let hash = createHash(arr, 0, L);
  const set = new Set([hash]);
  const p = pow(base, L, M);
  for (let i = 1; i <= arr.length - L; i++) {
    hash = ((hash * base - ((arr[i - 1] * p) % M) + M) % M) + (arr[i + L - 1] % M);
    if (set.has(hash)) {
      return i;
    }
    set.add(hash);
  }
  return -1;
}

function createHash(arr, start, end) {
  let hash = 0;
  for (let i = start; i < end; i++) {
    hash = (base * hash + arr[i]) % M;
  }
  return hash;
}

function pow(b, exp, mod) {
  let output = 1;
  for (let i = 0; i < exp; i++) {
    output = (output * b) % mod;
  }
  return output;
}
