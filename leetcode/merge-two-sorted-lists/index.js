/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const dummy = new ListNode();
  let ptr = dummy;
  let p1 = l1;
  let p2 = l2;
  while (p1 || p2) {
    if (!p1 || !p2) {
      ptr.next = p1 || p2;
      return dummy.next;
    } else if (p1.val <= p2.val) {
      ptr.next = p1;
      ptr = ptr.next;
      p1 = p1.next;
    } else {
      ptr.next = p2;
      ptr = ptr.next;
      p2 = p2.next;
    }
  }
  return dummy.next;
};
