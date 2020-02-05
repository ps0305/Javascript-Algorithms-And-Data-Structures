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
var verticalOrder = function(root) {
  if (!root) {
    return [];
  }
  const columns = {};
  const queue = [[root, 0]];
  while (queue.length) {
    const [node, col] = queue.shift();
    if (!(col in columns)) columns[col] = [];
    columns[col].push(node.val);
    if (node.left) {
      queue.push([node.left, col - 1]);
    }
    if (node.right) {
      queue.push([node.right, col + 1]);
    }
  }
  return Object.keys(columns)
    .map((k) => parseInt(k))
    .sort((a, b) => a - b)
    .map((k) => columns[k]);
};
