/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  let parent = null;
  let ptr = root;
  while (ptr) {
    parent = ptr;
    if (val < ptr.val) {
      ptr = ptr.left;
    } else if (val > ptr.val) {
      ptr = ptr.right;
    }
  }
  const node = new TreeNode(val);
  if (val < parent.val) {
    parent.left = node;
  } else if (val > parent.val) {
    parent.right = node;
  }
  return root;
};
