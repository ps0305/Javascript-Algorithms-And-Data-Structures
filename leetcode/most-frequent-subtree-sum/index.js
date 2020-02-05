/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  const map = {};
  dfs(root, map);
  // prettier-ignore
  const freq = Object
    .values(map)
    .reduce((acc, cur) => Math.max(acc, cur), -Infinity);
  // prettier-ignore
  return Object
    .keys(map)
    .filter(sum => map[sum] === freq);
};

function dfs(root, map) {
  if (!root) {
    return 0;
  }
  const sum = root.val + dfs(root.left, map) + dfs(root.right, map);
  map[sum] = (map[sum] || 0) + 1;
  return sum;
}
