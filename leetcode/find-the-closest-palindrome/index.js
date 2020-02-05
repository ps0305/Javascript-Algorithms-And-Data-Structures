/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
  const candidates = new Set([...createMirrors(n), ...createLess(n), ...createMore(n)]);
  candidates.delete(n);
  const nInt = parseInt(n);
  // prettier-ignore
  return '' + [...candidates]
    .filter(isPalindromic)
    .reduce((acc, cur) => {
      if (acc === cur) {
        return Math.min(acc, cur);
      }
      return Math.abs(acc - nInt) < Math.abs(cur - nInt) ? acc : cur;
    }, Infinity);
};

function createMirrors(n) {
  const mid = Math.ceil(n.length / 2);
  const left = n.substring(0, mid);
  const leftInt = parseInt(left);
  const endIndex = n.length % 2 === 0 ? n.length : -1;
  return [
    leftInt + 1 + reverse((leftInt + 1 + '').slice(0, endIndex)),
    leftInt + 0 + reverse((leftInt + 0 + '').slice(0, endIndex)),
    leftInt - 1 + reverse((leftInt - 1 + '').slice(0, endIndex)),
  ];
}

function isPalindromic(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}

function createMore(n) {
  return [10 ** (n.length - 1) + '1'];
}

function createLess(n) {
  if (n.length <= 1) {
    return [];
  }
  return ['9'.repeat(n.length - 1)];
}

function reverse(str) {
  let output = '';
  for (const c of str) {
    output = c + output;
  }
  return output;
}
