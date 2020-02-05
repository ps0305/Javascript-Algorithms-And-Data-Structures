/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
  [1, 2, 3, 4, 5, 6, 7, 8]
  f(i) = Math.max{f(j) + 1 if (nums[i] % nums[j] === 0)} for j in 0 ~ nums[i]
*/

const getArr = (nums, f, [max, ptr]) => {
  if (max <= 1) {
    return [nums[0]];
  }
  const output = [];
  while (ptr !== null) {
    output.push(nums[ptr]);
    ptr = f[ptr][1];
  }
  return output;
};

const largestDivisibleSubset = function(nums) {
  if (!nums.length) {
    return [];
  }
  nums.sort((a, b) => a - b);
  const f = [...new Array(nums.length)].map(() => [1, null]);
  let max = [1, null];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0) {
        if (f[j][0] + 1 > f[i][0]) {
          f[i][0] = f[j][0] + 1;
          f[i][1] = j;
          if (f[i][0] > max[0]) {
            max[0] = Math.max(max[0], f[i][0]);
            max[1] = i;
          }
        }
      }
    }
  }
  return getArr(nums, f, max);
};

export default largestDivisibleSubset;
