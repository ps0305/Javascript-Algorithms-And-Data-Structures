/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  let ptr = head;
  while (ptr) {
    if (ptr.child) {
      insertAfter(ptr, ptr.child);
    }
    ptr = ptr.next;
  }
  return head;
};

function insertAfter(p1, p2) {
  const next1 = p1.next;
  let next2 = p2;
  while (next2.next) {
    next2 = next2.next;
  }
  p1.next = p2;
  p2.prev = p1;
  p1.child = null;
  next2.next = next1;
  if (next1) {
    next1.prev = next2;
  }
}
