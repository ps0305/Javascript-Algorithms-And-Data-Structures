/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
  if (!root1 || !root2) {
    return root1 === root2;
  }
  if (root1.val === root2.val) {
    return (
      (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left)) ||
      (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right))
    );
  }
  return false;
};
