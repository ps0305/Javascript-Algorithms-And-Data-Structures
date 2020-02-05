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
var countNodes = function(root) {
  if (!root) {
    return 0;
  }
  const [nLeft, nRight] = helper(root);
  if (nLeft === nRight) {
    return 2 ** nLeft - 1;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
};

function helper(root) {
  let ptr;
  ptr = root;
  let nLeft = 0;
  while (ptr) {
    ptr = ptr.left;
    nLeft += 1;
  }
  ptr = root;
  let nRight = 0;
  while (ptr) {
    ptr = ptr.right;
    nRight += 1;
  }
  return [nLeft, nRight];
}
