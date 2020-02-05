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
var distributeCoins = function(root) {
  return helper(root)[0];
};

function helper(root) {
  if (!root) {
    return [0, 0, 0];
  }
  const [lSum, lCount, lCoins] = helper(root.left);
  const [rSum, rCount, rCoins] = helper(root.right);
  const count = lCount + rCount + 1;
  const coins = lCoins + rCoins + root.val;
  return [lSum + rSum + Math.abs(count - coins), count, coins];
}
