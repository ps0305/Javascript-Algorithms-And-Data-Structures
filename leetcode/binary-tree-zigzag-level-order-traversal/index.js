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
var zigzagLevelOrder = function(root) {
  if (!root) {
    return [];
  }
  const output = [[root.val]];
  let queue = [root];
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
      if (output.length % 2 === 1) {
        // prettier-ignore
        output.push(next.slice().reverse().map((node) => node.val));
      } else {
        output.push(next.map((node) => node.val));
      }
    }
    queue = next;
  }
  return output;
};
