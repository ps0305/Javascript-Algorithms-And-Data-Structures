/* eslint-disable no-self-compare */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const result = xor(nums);
  const i = (() => {
    for (let j = 0; j < 32; j++) {
      if (((result >> j) & 1) === 1) {
        return j;
      }
    }
  })();
  return groupBy(nums, (cur) => (cur >> i) & 1).map(xor);
};

function xor(arr) {
  return arr.reduce((acc, cur) => acc ^ cur, 0);
}

function groupBy(arr, getKey) {
  const result = arr.reduce(
    (acc, cur) => {
      acc[getKey(cur)].push(cur);
      return acc;
    },
    { 0: [], 1: [] },
  );
  return Object.values(result);
}
