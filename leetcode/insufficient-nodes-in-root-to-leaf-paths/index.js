/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function(root, limit, sum = 0) {
  if (!root) {
    return null;
  }
  if (!root.left && !root.right) {
    return sum + root.val < limit ? null : root;
  }
  root.left = sufficientSubset(root.left, limit, sum + root.val);
  root.right = sufficientSubset(root.right, limit, sum + root.val);
  return !root.left && !root.right ? null : root;
};
