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
var largestValues = function(root) {
  if (!root) {
    return [];
  }
  const output = [];
  let queue = [root];
  while (queue.length) {
    const next = [];
    let max = -Infinity;
    while (queue.length) {
      const node = queue.shift();
      max = Math.max(max, node.val);
      if (node.left) {
        next.push(node.left);
      }
      if (node.right) {
        next.push(node.right);
      }
    }
    output.push(max);
    queue = next;
  }
  return output;
};
