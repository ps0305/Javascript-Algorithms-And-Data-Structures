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
var widthOfBinaryTree = function(root) {
  if (!root) {
    return 0;
  }
  const M = 10 ** 9 + 7;
  let queue = [[root, 0]];
  let max = 0;
  while (queue.length) {
    const width = queue[queue.length - 1][1] - queue[0][1] + 1;
    max = Math.max(max, width);
    const next = [];
    while (queue.length) {
      const [node, i] = queue.shift();
      if (node.left) {
        next.push([node.left, (2 * i + 1) % M]);
      }
      if (node.right) {
        next.push([node.right, (2 * i + 2) % M]);
      }
    }
    queue = next;
  }
  return max;
};
