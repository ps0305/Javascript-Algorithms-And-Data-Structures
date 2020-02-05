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
var rightSideView = function(root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  const output = [root.val];
  while (queue.length) {
    const next = [];
    while (queue.length) {
      const node = queue.shift();
      if (node.left) {
        next.push(node.left);
      }
      if (node.right) {
        next.push(node.right);
      }
    }
    if (next.length) {
      output.push(next[next.length - 1].val);
    }
    queue = next;
  }
  return output;
};
