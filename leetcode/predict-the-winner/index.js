/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
  const m = nums.length;
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  const memo = new Array(m).fill(null).map(() => new Array(m).fill(null));
  for (let i = 0; i < m; i++) {
    memo[i][i] = nums[i];
  }
  const score1 = helper(nums, m, 0, m - 1, memo);
  const score2 = sum - score1;
  return score1 >= score2;
};

function helper(nums, m, i, j, memo) {
  if (i < 0 || i >= m || j < 0 || j >= m) {
    return 0;
  }
  if (memo[i][j] !== null) {
    return memo[i][j];
  }
  const result = Math.max(
    nums[i] + Math.min(helper(nums, m, i + 1, j - 1, memo), helper(nums, m, i + 2, j, memo)),
    nums[j] + Math.min(helper(nums, m, i + 1, j - 1, memo), helper(nums, m, i, j - 2, memo)),
  );
  memo[i][j] = result;
  return memo[i][j];
}
