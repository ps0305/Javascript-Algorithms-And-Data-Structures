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
var isValidBST = function(root, min = -Infinity, max = Infinity) {
  if (!root) {
    return true;
  }
  return (
    root.val > min &&
    root.val < max &&
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
