/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k, cache = new Set()) {
  if (!root) {
    return false;
  }
  if (cache.has(k - root.val)) {
    return true;
  }
  cache.add(root.val);
  return findTarget(root.left, k, cache) || findTarget(root.right, k, cache);
};
