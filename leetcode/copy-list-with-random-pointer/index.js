/* global Node */
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */

var copyRandomList = function(head) {
  if (!head) {
    return head;
  }
  let ptr;
  ptr = head;
  while (ptr) {
    const next = ptr.next;
    ptr.next = new Node(ptr.val);
    ptr.next.next = next;
    ptr = next;
  }
  ptr = head;
  while (ptr) {
    ptr.next.random = ptr.random ? ptr.random.next : null;
    ptr = ptr.next.next;
  }
  const h = head.next;
  ptr = head;
  while (ptr) {
    const next = ptr.next.next;
    ptr.next.next = ptr.next.next ? ptr.next.next.next : null;
    ptr.next = next;
    ptr = next;
  }
  return h;
};
