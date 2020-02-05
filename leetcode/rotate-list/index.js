/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  const n = getLength(head);
  const r = k % n;
  if (n <= 1 || r <= 0) {
    return head;
  }
  let p1 = head;
  let p2 = head;
  for (let i = 0; i < r; i++) {
    p2 = p2.next;
  }
  while (p2.next) {
    p1 = p1.next;
    p2 = p2.next;
  }
  const newHead = p1.next;
  p1.next = null;
  p2.next = head;
  return newHead;
};

function getLength(head) {
  let ptr = head;
  let n = 0;
  while (ptr) {
    n += 1;
    ptr = ptr.next;
  }
  return n;
}
