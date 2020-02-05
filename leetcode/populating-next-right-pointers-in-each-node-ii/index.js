/* global Node */
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
  if (!root) {
    return root;
  }
  const dummy = new Node();
  let ptr1 = root;
  while (ptr1) {
    let ptr2 = dummy;
    dummy.next = null;
    while (ptr1) {
      if (ptr1.left) {
        ptr2.next = ptr1.left;
        ptr2 = ptr2.next;
      }
      if (ptr1.right) {
        ptr2.next = ptr1.right;
        ptr2 = ptr2.next;
      }
      ptr1 = ptr1.next;
    }
    ptr1 = dummy.next;
  }
  return root;
};
