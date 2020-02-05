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
var isValidBST = function(root) {
  const stack = [];
  let ptr = root;
  let pre = -Infinity;
  while (stack.length || ptr) {
    if (ptr) {
      stack.push(ptr);
      ptr = ptr.left;
    } else {
      const node = stack.pop();
      if (!(node.val > pre)) {
        return false;
      }
      pre = node.val;
      ptr = node.right;
    }
  }
  return true;
};
