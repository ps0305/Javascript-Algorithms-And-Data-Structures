/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function(s, k, start = 0, end = s.length - 1, memo = {}) {
  const key = `${k}:${start}:${end}`;
  if (key in memo) {
    return memo[key];
  }
  let left = start;
  let right = end;
  while (left < right) {
    if (s[left] === s[right]) {
      left += 1;
      right -= 1;
    } else {
      if (k > 0) {
        memo[key] =
          isValidPalindrome(s, k - 1, left, right - 1, memo) ||
          isValidPalindrome(s, k - 1, left + 1, right, memo);
        return memo[key];
      }
      memo[key] = false;
      return memo[key];
    }
  }
  memo[key] = true;
  return memo[key];
};
