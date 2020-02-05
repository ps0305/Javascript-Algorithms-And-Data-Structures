/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  return atMost(nums, k) - atMost(nums, k - 1);
};

function atMost(arr, k) {
  let nOdds = 0;
  let start = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    nOdds += arr[i] % 2 === 1 ? 1 : 0;
    while (nOdds > k) {
      nOdds -= arr[start] % 2 === 1 ? 1 : 0;
      start += 1;
    }
    count += i - start + 1;
  }
  return count;
}
