/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return createTree(inorder, preorder, 0, preorder.length - 1, 0, inorder.length - 1);
};

function createTree(inorder, preorder, i, j, p, q) {
  if (i > j || p > q) {
    return null;
  }
  const root = new TreeNode(preorder[p]);
  const mIndex = inorder.indexOf(preorder[p]);
  const nLeft = mIndex - i;
  const nRight = j - mIndex;
  root.left = createTree(inorder, preorder, i, mIndex - 1, p + 1, p + nLeft);
  root.right = createTree(inorder, preorder, mIndex + 1, j, p + nLeft + 1, p + nLeft + nRight);
  return root;
}
