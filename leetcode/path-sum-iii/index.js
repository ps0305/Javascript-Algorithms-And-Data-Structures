/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum, curSum = 0, curPath = { 0: 1 }) {
  if (!root) {
    return 0;
  }
  curSum += root.val;
  let n = curPath[curSum - sum] || 0;
  curPath[curSum] = (curPath[curSum] || 0) + 1;
  n += pathSum(root.left, sum, curSum, curPath) + pathSum(root.right, sum, curSum, curPath);
  curPath[curSum] -= 1;
  return n;
};
