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
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }
  const newHead = head.next;
  const next = head.next.next;
  head.next.next = head;
  head.next = swapPairs(next);
  return newHead;
};
