/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var findLeaves = function(r) {
  const map = {};
  (function helper(root) {
    if (!root) {
      return 0;
    }
    const left = helper(root.left);
    const right = helper(root.right);
    const maxDepth = left && right ? Math.max(left, right) + 1 : (left || right) + 1;
    if (!(maxDepth in map)) map[maxDepth] = [];
    map[maxDepth].push(root.val);
    return maxDepth;
  })(r);
  return Object.values(map);
};
