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
var checkEqualTree = function(root) {
  const map = {};
  const sum = getSum(root, map);
  // prettier-ignore
  return sum === 0
    ? map[sum] > 1
    : (sum / 2) in map;
};

function getSum(root, map) {
  if (!root) {
    return 0;
  }
  const sum = root.val + getSum(root.left, map) + getSum(root.right, map);
  map[sum] = (map[sum] || 0) + 1;
  return sum;
}
