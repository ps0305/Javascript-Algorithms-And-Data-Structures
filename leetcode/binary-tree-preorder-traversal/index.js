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
var preorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  const output = [];
  const stack = [root];
  while (stack.length) {
    const ptr = stack.pop();
    output.push(ptr.val);
    if (ptr.right) {
      stack.push(ptr.right);
    }
    if (ptr.left) {
      stack.push(ptr.left);
    }
  }
  return output;
};
