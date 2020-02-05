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
var verticalTraversal = function(root) {
  const queue = [[root, 0, 0]];
  const map = {};
  while (queue.length) {
    const [node, i, j] = queue.shift();
    if (!(j in map)) map[j] = [];
    map[j].push([node.val, i]);
    if (node.left) {
      queue.push([node.left, i + 1, j - 1]);
    }
    if (node.right) {
      queue.push([node.right, i + 1, j + 1]);
    }
  }
  return Object.keys(map)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map((key) => map[key].sort(sort).map(([val]) => val));
};

function sort([val1, i1], [val2, i2]) {
  if (i1 !== i2) {
    return i1 - i2;
  }
  return val1 - val2;
}
