/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
  let successor = null;
  let ptr = root;
  while (ptr) {
    if (p.val < ptr.val) {
      successor = ptr;
      ptr = ptr.left;
    } else if (p.val >= ptr.val) {
      ptr = ptr.right;
    }
  }
  return successor;
};
