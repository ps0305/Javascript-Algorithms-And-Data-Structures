/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  const arr = [];
  for (const num of nums) {
    if (!arr.length || num > arr[arr.length - 1]) {
      arr.push(num);
    } else if (num <= arr[0]) {
      arr[0] = num;
    } else if (num <= arr[1]) {
      arr[1] = num;
    }
    if (arr.length >= 3) {
      return true;
    }
  }
  return false;
};
