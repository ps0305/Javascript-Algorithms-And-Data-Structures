/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) {
    return;
  }
  const { left, right } = root;
  flatten(left);
  flatten(right);
  if (left) {
    root.left = null;
    insertAfter(left, root);
  }
};

function insertAfter(source, target) {
  const { right } = target;
  const tail = findTail(source);
  target.right = source;
  tail.right = right;
}

function findTail(root) {
  let ptr = root;
  while (ptr.right) {
    ptr = ptr.right;
  }
  return ptr;
}
