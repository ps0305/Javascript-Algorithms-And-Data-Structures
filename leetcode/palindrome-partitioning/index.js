/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s, start = 0, selected = [], output = []) {
  if (start >= s.length) {
    output.push([...selected]);
    return output;
  }
  for (let length = 1; start + length <= s.length; length++) {
    const substring = s.substring(start, start + length);
    if (isPalindrome(substring)) {
      selected.push(substring);
      partition(s, start + length, selected, output);
      selected.pop();
    }
  }
  return output;
};

function isPalindrome(str) {
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
