/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
  const nBits = 32;
  let output = 0;
  for (let i = 0; i < 32; i++) {
    const { nZeros, nOnes } = count(nums);
    output += nZeros * nOnes;
    for (let j = 0; j < nums.length; j++) {
      nums[j] >>= 1;
    }
  }
  return output;
};

function count(nums) {
  const n = nums.length;
  const nZeros = nums
    .map((num) => num % 2)
    .filter((r) => r === 0)
    .reduce((acc) => acc + 1, 0);
  const nOnes = n - nZeros;
  return {
    nZeros,
    nOnes,
  };
}
