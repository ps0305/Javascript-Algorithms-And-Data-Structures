/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let ptr = head;
  let sum = 0;
  while (ptr) {
    sum = sum * 2 + ptr.val;
    ptr = ptr.next;
  }
  return sum;
};
