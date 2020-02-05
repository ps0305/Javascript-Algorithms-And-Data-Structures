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
var addTwoNumbers = function(l1, l2) {
  const dummy = new ListNode();
  let ptr = dummy;
  let p1 = l1;
  let p2 = l2;
  let c = 0;
  while (p1 || p2 || c) {
    const sum = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + c;
    c = Math.floor(sum / 10);
    ptr.next = new ListNode(sum % 10);
    ptr = ptr.next;
    p1 = p1 ? p1.next : p1;
    p2 = p2 ? p2.next : p2;
  }
  return dummy.next;
};
