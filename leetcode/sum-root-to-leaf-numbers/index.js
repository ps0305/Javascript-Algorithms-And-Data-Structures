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
var sumNumbers = function(root, sum = 0) {
  if (!root) {
    return 0;
  }
  sum = sum * 10 + root.val;
  if (root.left || root.right) {
    return sumNumbers(root.left, sum) + sumNumbers(root.right, sum);
  }
  return sum;
};
