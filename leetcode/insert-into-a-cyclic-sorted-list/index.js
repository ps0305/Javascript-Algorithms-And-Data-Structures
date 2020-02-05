/* global Node */
/**
 * // Definition for a Node.
 * function Node(val,next) {
 *    this.val = val;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */

const insertAfter = (r1, r2) => {
  const next = r1.next;
  r1.next = r2;
  r2.next = next;
};

const isPosition = (head, node, ptr, pre) => {
  if (ptr === head) {
    return true;
  }
  if (ptr.val >= pre.val && ptr.val > ptr.next.val) {
    return node.val >= ptr.val || node.val <= ptr.next.val;
  } else {
    return node.val >= ptr.val && node.val < ptr.next.val;
  }
};

var insert = function(head, insertVal) {
  const node = new Node(insertVal);
  if (!head) {
    node.next = node;
    return node;
  }
  let pre = head;
  let ptr = head.next;
  while (!isPosition(head, node, ptr, pre)) {
    pre = ptr;
    ptr = ptr.next;
  }
  insertAfter(ptr, node);
  return head;
};
