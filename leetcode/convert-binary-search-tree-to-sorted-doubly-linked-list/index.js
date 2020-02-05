/* global Node */
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */

const connect = (r1, r2) => {
  r1.right = r2;
  r2.left = r1;
};

var treeToDoublyList = function(root) {
  if (!root) {
    return null;
  }
  const dummy = new Node();
  let pre = dummy;
  let ptr = root;
  const stack = [];
  while (stack.length || ptr) {
    if (ptr) {
      stack.push(ptr);
      ptr = ptr.left;
    } else {
      const node = stack.pop();
      ptr = node.right;
      // prettier-ignore
      connect(pre, node);
      pre = node;
    }
  }
  // prettier-ignore
  connect(pre, dummy.right);
  return dummy.right;
};
