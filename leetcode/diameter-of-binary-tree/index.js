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
var diameterOfBinaryTree = function(root) {
  let max = 0;
  const getHeight = (r) => {
    if (!r) {
      return -1;
    }
    const left = getHeight(r.left);
    const right = getHeight(r.right);

    max = Math.max(max, left + 1 + right + 1);

    return Math.max(left, right) + 1;
  };
  getHeight(root);
  return max;
};
