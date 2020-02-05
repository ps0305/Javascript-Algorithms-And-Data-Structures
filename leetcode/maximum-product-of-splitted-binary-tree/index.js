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
var maxProduct = function(root) {
  const M = 10 ** 9 + 7;
  const [total, sums] = helper(root);
  let max = -Infinity;
  for (const sum of sums) {
    max = Math.max(max, sum * (total - sum));
  }
  return max % M;
};

function helper(root, sums = new Set()) {
  if (!root) {
    return [0, sums];
  }
  const left = helper(root.left, sums);
  const right = helper(root.right, sums);
  const sum = root.val + left[0] + right[0];
  sums.add(sum);
  return [sum, sums];
}
