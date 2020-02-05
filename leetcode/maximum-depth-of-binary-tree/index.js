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

const getHeight = (root) => {
  if (!root) {
    return -1;
  }
  const left = getHeight(root.left);
  const right = getHeight(root.right);
  return Math.max(left, right) + 1;
};

var maxDepth = function(root) {
  return getHeight(root) + 1;
};
