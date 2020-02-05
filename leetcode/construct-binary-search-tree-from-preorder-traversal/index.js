/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder, start = 0, end = preorder.length) {
  if (start >= end) {
    return null;
  }
  const root = new TreeNode(preorder[start]);
  const mid = findMid(preorder, start, end);
  root.left = bstFromPreorder(preorder, start + 1, mid);
  root.right = bstFromPreorder(preorder, mid, end);
  return root;
};

function findMid(arr, start, end) {
  let i = start + 1;
  while (i < end) {
    if (arr[i] > arr[start]) {
      return i;
    }
    i += 1;
  }
  return i;
}
