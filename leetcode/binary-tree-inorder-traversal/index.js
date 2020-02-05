/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root, output = []) {
  if (!root) {
    return output;
  }
  inorderTraversal(root.left, output);
  output.push(root.val);
  inorderTraversal(root.right, output);
  return output;
};
