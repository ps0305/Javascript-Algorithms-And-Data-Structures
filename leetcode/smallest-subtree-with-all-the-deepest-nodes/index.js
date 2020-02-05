/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
  return helper(root)[1];
};

function helper(root, depth = 0) {
  if (!root) {
    return [depth, root];
  }
  const left = helper(root.left, root.left ? depth + 1 : depth);
  const right = helper(root.right, root.right ? depth + 1 : depth);
  if (left[0] === right[0]) {
    return [left[0], root];
  }
  return left[0] > right[0] ? left : right;
}
