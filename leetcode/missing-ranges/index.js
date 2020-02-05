/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  const output = [];
  let pre = lower;
  for (const num of nums) {
    if (num > pre) {
      output.push([pre, num - 1]);
    }
    pre = num + 1;
  }
  if (upper >= pre) {
    output.push([pre, upper]);
  }
  return output.map(format);
};

function format([start, end]) {
  if (start === end) {
    return start + '';
  }
  return start + '->' + end;
}
