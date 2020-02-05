/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const output = [];
  let c = 1;
  let i = digits.length - 1;
  while (c || i >= 0) {
    const sum = (digits[i] || 0) + c;
    output.unshift(sum % 10);
    c = Math.floor(sum / 10);
    i -= 1;
  }
  return output;
};
