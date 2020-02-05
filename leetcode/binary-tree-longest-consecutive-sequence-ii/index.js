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
var longestConsecutive = function(r) {
  let max = r ? 1 : 0;

  (function helper(root) {
    if (!root) {
      return;
    }
    const localMax = longestPath(root, 1) + longestPath(root, -1) - 1;
    max = Math.max(max, localMax);
    helper(root.left);
    helper(root.right);
  })(r);

  return max;
};

function longestPath(root, diff) {
  if (!root) {
    return 0;
  }
  // prettier-ignore
  const left = root.left && (root.left.val - root.val === diff)
    ? longestPath(root.left, diff)
    : 0;
  // prettier-ignore
  const right = root.right && (root.right.val - root.val === diff)
    ? longestPath(root.right, diff)
    : 0;
  return Math.max(left, right) + 1;
}
