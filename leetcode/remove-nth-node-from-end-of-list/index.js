/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let slow = head;
  let fast = head;
  for (let i = 1; i < n; i++) {
    fast = fast.next;
  }
  const dummy = new ListNode();
  dummy.next = head;
  let pre = dummy;
  while (fast.next !== null) {
    pre = slow;
    slow = slow.next;
    fast = fast.next;
  }
  pre.next = slow.next;
  return dummy.next;
};
