/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const dummy = new ListNode();
  let p1 = dummy;
  let p2 = head;
  while (p2) {
    p1.next = null;
    if (p2.val !== val) {
      p1.next = p2;
      p1 = p1.next;
    }
    p2 = p2.next;
  }
  return dummy.next;
};
