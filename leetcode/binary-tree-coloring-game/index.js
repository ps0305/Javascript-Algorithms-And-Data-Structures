/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {
  const node = find(root, x);
  const nLeft = count(node.left);
  const nRight = count(node.right);
  const nParent = n - nLeft - nRight - 1;
  const half = n / 2;
  return nLeft > half || nRight > half || nParent > half;
};

function find(root, target) {
  if (!root) {
    return null;
  }
  if (root.val === target) {
    return root;
  }
  return find(root.left, target) || find(root.right, target);
}

function count(root) {
  if (!root) {
    return 0;
  }
  return count(root.left) + count(root.right) + 1;
}
