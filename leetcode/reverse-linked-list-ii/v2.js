const ListNode = function(val) {
  this.val = val;
  this.next = null;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

/*
  Input: 1->2->3->4->5->NULL, m = 2, n = 4
  Output: 1->4->3->2->5->NULL
*/

const reverse = (head, n) => {
  let rtail = head;
  let ptr = head;
  let pre = null;
  let next;
  for (let i = 0; i < n; i++) {
    next = ptr.next;
    ptr.next = pre;
    pre = ptr;
    ptr = next;
  }
  rtail.next = ptr;
  return pre;
};

const reverseBetween = function(head, m, n) {
  if (!head || !head.next) {
    return head;
  }
  const dummy = new ListNode(null);
  dummy.next = head;
  let ptr = dummy;
  for (let i = 0; i < m - 1; i++) {
    ptr = ptr.next;
  }
  ptr.next = reverse(ptr.next, n - m + 1);
  return dummy.next;
};

export default reverseBetween;
