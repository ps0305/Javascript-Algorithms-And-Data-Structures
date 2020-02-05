/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

const getSuccessor = (root) => {
  let ptr = root.right;
  while (ptr.left) {
    ptr = ptr.left;
  }
  return ptr;
};

var deleteNode = function(root, key) {
  if (!root) {
    return null;
  }
  if (key === root.val) {
    if (!root.left && !root.right) {
      return null;
    }
    if (!root.left || !root.right) {
      return root.left || root.right;
    }
    const successor = getSuccessor(root);
    root.val = successor.val;
    root.right = deleteNode(root.right, successor.val);
    return root;
  } else {
    if (key < root.val) {
      root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
      root.right = deleteNode(root.right, key);
    }
    return root;
  }
};
