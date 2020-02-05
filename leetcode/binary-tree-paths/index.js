/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root, selected = root ? root.val + '' : null, output = []) {
  if (!root) {
    return [];
  }
  if (!root.left && !root.right) {
    output.push(selected);
    return output;
  }
  if (root.left) {
    binaryTreePaths(root.left, selected + '->' + root.left.val, output);
  }
  if (root.right) {
    binaryTreePaths(root.right, selected + '->' + root.right.val, output);
  }
  return output;
};
