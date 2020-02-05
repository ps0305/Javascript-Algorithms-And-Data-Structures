/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const stack = [];
  const map = {};
  for (const i of nums2) {
    while (stack.length && i > stack[stack.length - 1]) {
      map[stack[stack.length - 1]] = i;
      stack.pop();
    }
    stack.push(i);
  }
  return nums1.map((i) => (i in map ? map[i] : -1));
};
