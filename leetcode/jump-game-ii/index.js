/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let end = 0;
  let fartest = 0;
  let nSteps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    fartest = Math.max(fartest, i + nums[i]);
    if (i === end) {
      end = fartest;
      nSteps += 1;
    }
  }
  return nSteps;
};
