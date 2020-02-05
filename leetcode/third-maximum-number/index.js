/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  const arr = [-Infinity, -Infinity, -Infinity];
  for (const num of nums) {
    const index = getIndex(arr, num);
    arr.splice(index, 0, num);
    arr.pop();
  }
  return arr[2] > -Infinity ? arr[2] : arr[0];
};

function getIndex(arr, target) {
  if (target < arr[2] || arr.indexOf(target) > -1) {
    return arr.length;
  }
  if (target > arr[0]) {
    return 0;
  } else if (target > arr[1]) {
    return 1;
  } else if (target > arr[2]) {
    return 2;
  }
}
