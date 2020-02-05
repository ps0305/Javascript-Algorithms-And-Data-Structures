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
var findBottomLeftValue = function(r) {
  let [row, col, val] = [-Infinity, Infinity, -1];

  (function dfs(root, i = 0, j = 0) {
    if (!root) {
      return;
    }
    if (i > row || (i === row && j <= col)) {
      row = i;
      col = j;
      val = root.val;
    }
    dfs(root.left, i + 1, j - 1);
    dfs(root.right, i + 1, j + 1);
  })(r);

  return val;
};
