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
var lcaDeepestLeaves = function(root) {
  return helper(root)[1];
};

function helper(root, depth = 0) {
  if (!root) {
    return [depth - 1, root];
  }
  const [leftDepth, left] = helper(root.left, depth + 1);
  const [rightDepth, right] = helper(root.right, depth + 1);
  if (leftDepth === rightDepth) {
    return [leftDepth, root];
  } else if (leftDepth > rightDepth) {
    return [leftDepth, left];
  }
  return [rightDepth, right];
}
