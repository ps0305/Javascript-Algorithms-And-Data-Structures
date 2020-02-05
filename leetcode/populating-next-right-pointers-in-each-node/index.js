/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  let ptr = root;
  while (ptr) {
    const next = ptr.left;
    while (ptr && ptr.left && ptr.right) {
      ptr.left.next = ptr.right;
      ptr.right.next = (ptr.next && ptr.next.left) || null;
      ptr = ptr.next;
    }
    ptr = next;
  }
  return root;
};
