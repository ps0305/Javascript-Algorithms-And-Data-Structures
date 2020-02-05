/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const stack = [];
  let ptr = root;
  let count = 0;
  while (ptr || stack.length) {
    if (ptr) {
      stack.push(ptr);
      ptr = ptr.left;
    } else {
      const node = stack.pop();
      count += 1;
      if (count === k) {
        return node.val;
      }
      ptr = node.right;
    }
  }
  return null;
};
