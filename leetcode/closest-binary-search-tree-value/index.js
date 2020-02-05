/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
  let output = root.val;
  let ptr = root;
  while (ptr) {
    if (Math.abs(ptr.val - target) < Math.abs(output - target)) {
      output = ptr.val;
    }
    ptr = target > ptr.val ? ptr.right : ptr.left;
  }
  return output;
};
