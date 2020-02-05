/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums, start = 0, end = nums.length) {
  if (start >= end) {
    return null;
  }
  const mid = Math.floor((start + end) / 2);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums, start, mid);
  root.right = sortedArrayToBST(nums, mid + 1, end);
  return root;
};
