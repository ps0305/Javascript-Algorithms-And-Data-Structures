/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root, min = root && root.val, max = root && root.val) {
  if (!root) {
    return 0;
  }
  max = Math.max(root.val, max);
  min = Math.min(root.val, min);
  const right = maxAncestorDiff(root.right, min, max);
  const left = maxAncestorDiff(root.left, min, max);
  return Math.max(left, right, max - min);
};
