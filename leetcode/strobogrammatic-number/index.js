/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
  let i = 0;
  let j = num.length - 1;
  const symmetricNumbers = new Set(['1', '8', '0']);
  while (i <= j) {
    if (i !== j) {
      const isValid =
        (num[i] === num[j] && symmetricNumbers.has(num[i])) ||
        (num[i] === '6' && num[j] === '9') ||
        (num[i] === '9' && num[j] === '6');
      if (!isValid) {
        return false;
      }
    } else {
      const isValid = symmetricNumbers.has(num[i]);
      if (!isValid) {
        return false;
      }
    }
    i += 1;
    j -= 1;
  }
  return true;
};
