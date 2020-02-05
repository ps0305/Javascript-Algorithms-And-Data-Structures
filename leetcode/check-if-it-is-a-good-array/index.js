/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function(nums) {
  let gcd = nums[0];
  for (const num of nums) {
    gcd = findGCD(num, gcd);
    if (gcd === 1) {
      return true;
    }
  }
  return false;
};

function findGCD(a, b) {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
}
