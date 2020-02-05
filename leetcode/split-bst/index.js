/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} V
 * @return {TreeNode[]}
 */
var splitBST = function(root, V) {
  if (!root) {
    return [null, null];
  }
  if (V < root.val) {
    const result = splitBST(root.left, V);
    root.left = result[1];
    result[1] = root;
    return result;
  } else if (V >= root.val) {
    const result = splitBST(root.right, V);
    root.right = result[0];
    result[0] = root;
    return result;
  }
};
