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
var deleteDuplicates = function(head) {
  if (!head) {
    return head;
  }
  let ptr = head.next;
  while (ptr && ptr.val === head.val) {
    ptr = ptr.next;
  }
  head.next = ptr;
  deleteDuplicates(ptr);
  return head;
};
