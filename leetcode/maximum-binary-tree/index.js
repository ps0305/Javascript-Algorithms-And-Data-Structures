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
var constructMaximumBinaryTree = function(nums, left = 0, right = nums.length - 1) {
  if (!nums.length) {
    return null;
  }
  if (left > right) {
    return null;
  }
  let maxIndex = left;
  for (let i = left; i <= right; i++) {
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }
  const root = new TreeNode(nums[maxIndex]);
  root.left = constructMaximumBinaryTree(nums, left, maxIndex - 1);
  root.right = constructMaximumBinaryTree(nums, maxIndex + 1, right);
  return root;
};
