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
  let max = 0;

  (function helper(root, parent = null, n = 0) {
    if (!root) {
      return;
    }
    const nConsecutives = isSeq(parent, root) ? n + 1 : 1;
    max = Math.max(max, nConsecutives);
    helper(root.left, root, nConsecutives);
    helper(root.right, root, nConsecutives);
  })(r);

  return max;
};

function isSeq(parent, root) {
  if (!parent || !root) {
    return false;
  }
  return parent.val + 1 === root.val;
}
