/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const arr = createPrefixTable(needle);
  let i = 0,
    j = 0;
  while (i < haystack.length) {
    const length = match(haystack, needle, i, j);
    if (length === needle.length) {
      return i - j;
    }
    if (length) {
      j = arr[j - 1];
    } else {
      j = 0;
      i += 1;
    }
  }
  return j < needle.length ? -1 : j;
};

function match(s, p, sStart, pStart) {
  let i = sStart,
    j = pStart;
  while (s[i] === p[j] && i < s.length && j < p.length) {
    i += 1;
    j += 1;
  }
  return j;
}

function createPrefixTable(str) {
  const arr = new Array(str.length).fill(0);
  let j = 0;
  for (let i = 1; i < str.length; i++) {
    while (str[i] !== str[j] && j > 0) {
      j = arr[j - 1];
    }
    if (str[i] === str[j]) {
      j += 1;
    }
    arr[i] = j;
  }
  return arr;
}
