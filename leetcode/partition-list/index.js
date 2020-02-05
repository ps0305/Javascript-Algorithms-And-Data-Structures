/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const d1 = new ListNode();
  const d2 = new ListNode();
  let p1 = d1;
  let p2 = d2;
  let ptr = head;
  while (ptr) {
    if (ptr.val < x) {
      p1.next = ptr;
      p1 = p1.next;
    } else if (ptr.val >= x) {
      p2.next = ptr;
      p2 = p2.next;
    }
    ptr = ptr.next;
  }
  p1.next = d2.next;
  p2.next = null;
  return d1.next;
};
