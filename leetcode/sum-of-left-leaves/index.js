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
var sumOfLeftLeaves = function(root) {
  return helper(root).sum;
};

function helper(root) {
  if (!root) {
    return {
      isLeave: false,
      sum: 0,
    };
  }
  const left = helper(root.left);
  const right = helper(root.right);
  return {
    isLeave: !root.left && !root.right,
    sum: left.sum + right.sum + (left.isLeave ? root.left.val : 0),
  };
}
