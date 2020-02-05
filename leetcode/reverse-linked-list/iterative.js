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
var reverseList = function(head) {
  let pre = null;
  let ptr = head;
  let next;
  while (ptr) {
    next = ptr.next;
    ptr.next = pre;
    pre = ptr;
    ptr = next;
  }
  return pre;
};
