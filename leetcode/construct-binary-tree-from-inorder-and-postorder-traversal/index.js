/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  return createTree(inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1);
};

function createTree(inorder, postorder, i, j, p, q) {
  if (i > j || p > q) {
    return null;
  }
  const root = new TreeNode(postorder[q]);
  const mIndex = inorder.indexOf(postorder[q]);
  const nLeft = mIndex - i;
  const nRight = j - mIndex;
  root.left = createTree(inorder, postorder, i, mIndex - 1, p, p + nLeft - 1);
  root.right = createTree(inorder, postorder, mIndex + 1, j, p + nLeft, p + nLeft + nRight - 1);
  return root;
}
