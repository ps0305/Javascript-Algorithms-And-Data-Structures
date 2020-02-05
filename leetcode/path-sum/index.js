/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum, pre = 0) {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    return pre + root.val === sum;
  }
  return hasPathSum(root.left, sum, pre + root.val) || hasPathSum(root.right, sum, pre + root.val);
};
