/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  return helper(root)[0];
};

function helper(root) {
  if (!root) {
    return [true, -1];
  }
  const left = helper(root.left);
  const right = helper(root.right);
  return [
    left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1,
    Math.max(left[1], right[1]) + 1,
  ];
}
