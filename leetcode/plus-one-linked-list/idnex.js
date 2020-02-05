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
var plusOne = function(head) {
  if (!head) {
    return null;
  }
  const c = helper(head);
  if (c === 0) {
    return head;
  }
  const node = new ListNode(c);
  node.next = head;
  return node;
};

function helper(head) {
  if (!head) {
    return 1;
  }
  const c = helper(head.next);
  const sum = head.val + c;
  head.val = sum % 10;
  return Math.floor(sum / 10);
}
