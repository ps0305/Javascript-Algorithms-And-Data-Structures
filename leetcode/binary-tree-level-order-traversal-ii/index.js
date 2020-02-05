/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  const output = [];
  while (queue.length) {
    const nextQueue = [];
    const level = [];
    while (queue.length) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
    }
    output.push(level);
    queue = nextQueue;
  }
  return output.reverse();
};
