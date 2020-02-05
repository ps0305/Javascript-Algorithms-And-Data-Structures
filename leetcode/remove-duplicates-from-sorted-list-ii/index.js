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
  if (!head || !head.next) {
    return head;
  }
  if (head.val !== head.next.val) {
    head.next = deleteDuplicates(head.next);
    return head;
  }
  let ptr = head.next;
  while (ptr && ptr.val === head.val) {
    ptr = ptr.next;
  }
  return deleteDuplicates(ptr);
};
