/**
 * @param {string} s
 * @return {boolean}
 */

const isCharacter = (c) => {
  return /[a-zA-Z0-9]/.test(c);
};

var isPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (!isCharacter(s[left])) {
      left += 1;
    }
    while (!isCharacter(s[right])) {
      right -= 1;
    }
    if (left < s.length && right >= 0 && s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
};
