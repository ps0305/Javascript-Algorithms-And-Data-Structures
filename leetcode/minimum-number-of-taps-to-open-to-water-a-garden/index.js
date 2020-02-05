/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
  const nums = createNums(n, ranges);
  return jump(nums);
};

function jump(nums) {
  let end = 0;
  let fartest = 0;
  let nSteps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    fartest = Math.max(fartest, i + nums[i]);
    if (i === fartest) {
      return -1;
    }
    if (i === end) {
      end = fartest;
      nSteps += 1;
    }
  }
  return nSteps;
}

function createNums(n, ranges) {
  const nums = new Array(n + 1).fill(0);
  for (let i = 0; i < ranges.length; i++) {
    const left = Math.max(i - ranges[i], 0);
    const right = Math.min(n, i + ranges[i]);
    nums[left] = right - left;
  }
  return nums;
}
