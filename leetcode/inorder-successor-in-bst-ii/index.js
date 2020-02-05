/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var inorderSuccessor = function(node) {
  if (!node) {
    return null;
  }
  if (node.right) {
    return findMinFromRight(node);
  }
  return findMinFromParent(node);
};

function findMinFromParent(node) {
  let ptr = node;
  while (ptr.parent) {
    if (isLeftChild(ptr.parent, ptr)) {
      return ptr.parent;
    }
    ptr = ptr.parent;
  }
  return null;
}

function isLeftChild(parent, child) {
  return child === parent.left;
}

function findMinFromRight(node) {
  let ptr = node.right;
  while (ptr.left) {
    ptr = ptr.left;
  }
  return ptr;
}
