/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  helper(root);
};

function helper(root) {
  if (!root) {
    return [null, null];
  }
  const left = helper(root.left);
  const right = helper(root.right);
  if (root.left) {
    root.left = null;
    root.right = left[0];
    left[1].right = right[0];
  }
  return [root, right[1] || left[1] || root];
}
