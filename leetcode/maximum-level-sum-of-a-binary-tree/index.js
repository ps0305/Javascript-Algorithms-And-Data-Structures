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
var maxLevelSum = function(root) {
  const max = { val: root.val, level: 1 };
  let queue = [root];
  let level = 1;
  while (queue.length) {
    const next = [];
    let sum = 0;
    while (queue.length) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) {
        next.push(node.left);
      }
      if (node.right) {
        next.push(node.right);
      }
    }
    if (sum > max.val) {
      max.val = sum;
      max.level = level;
    }
    level += 1;
    queue = next;
  }
  return max.level;
};
