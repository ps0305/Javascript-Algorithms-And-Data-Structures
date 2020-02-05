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
var reverseBetween = function(head, m, n) {
  const dummy = new ListNode();
  dummy.next = head;
  const h1 = findNth(dummy, m - 1);
  const h2 = findNth(dummy, n + 1);
  const [rh, rt] = reverse(h1.next, n - m + 1);
  h1.next = rh;
  rt.next = h2;
  return dummy.next;
};

function findNth(head, n) {
  let ptr = head;
  for (let i = 0; i < n; i++) {
    ptr = ptr.next;
  }
  return ptr;
}

function reverse(head, nTimes) {
  let pre = null;
  let ptr = head;
  let next;
  for (let i = 0; i < nTimes; i++) {
    next = ptr.next;
    ptr.next = pre;
    pre = ptr;
    ptr = next;
  }
  return [pre, head];
}
