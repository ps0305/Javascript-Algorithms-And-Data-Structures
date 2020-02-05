/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) {
  const [m, n] = getDimentions(root);
  const matrix = new Array(m).fill(null).map(() => new Array(n).fill(''));
  return dfs(matrix, 0, n - 1, 0, root);
};

function dfs(matrix, left, right, i, root) {
  if (!root) {
    return matrix;
  }
  const j = (left + right) / 2;
  matrix[i][j] = root.val + '';
  dfs(matrix, left, j - 1, i + 1, root.left);
  dfs(matrix, j + 1, right, i + 1, root.right);
  return matrix;
}

function getDimentions(root, depth = 0) {
  if (!root) {
    return [depth, 0];
  }
  const left = getDimentions(root.left, depth + 1);
  const right = getDimentions(root.right, depth + 1);
  // prettier-ignore
  return [
    Math.max(left[0], right[0]),
    2 * Math.max(left[1], right[1]) + 1,
  ];
}
