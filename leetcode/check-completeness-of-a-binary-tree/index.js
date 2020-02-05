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
var isCompleteTree = function(root) {
  let queue = [root];
  let hasNull = false;
  while (queue.length) {
    const next = [];
    while (queue.length) {
      const node = queue.shift();
      if (!node) {
        hasNull = true;
        continue;
      }
      if (hasNull) {
        return false;
      }
      next.push(node.left);
      next.push(node.right);
    }
    queue = next;
  }
  return true;
};
