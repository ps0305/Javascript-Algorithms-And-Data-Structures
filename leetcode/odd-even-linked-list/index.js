/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  const d1 = new ListNode();
  const d2 = new ListNode();
  let p1 = d1;
  let p2 = d2;
  let ptr = head;
  for (let i = 1; ptr !== null; i++) {
    if (i % 2 === 1) {
      p1.next = ptr;
      p1 = p1.next;
    } else {
      p2.next = ptr;
      p2 = p2.next;
    }
    ptr = ptr.next;
  }
  p1.next = null;
  p2.next = null;
  p1.next = d2.next;
  return d1.next;
};
