/**
 * @param {number[]} ratings
 * @return {number}
 */
/*
[2,1,0,2,5,3,4]
[3,2,1,2,3,1,2]
*/
var candy = function(ratings) {
  const m = ratings.length;
  const nums = new Array(m).fill(1);
  for (let i = 1; i < m; i++) {
    if (ratings[i] > ratings[i - 1]) {
      nums[i] = nums[i - 1] + 1;
    }
  }
  for (let i = m - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      nums[i] = Math.max(nums[i], nums[i + 1] + 1);
    }
  }
  return nums.reduce((acc, cur) => acc + cur, 0);
};
