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
var insertionSortList = function(head) {
  const dummy = new ListNode(-Infinity);
  let p1 = head;
  while (p1) {
    const next = p1;
    p1 = p1.next;
    insert(dummy, next);
  }
  return dummy.next;
};

function insert(h1, h2) {
  let ptr = h1;
  while (ptr) {
    if (!ptr.next || (ptr.val <= h2.val && h2.val < ptr.next.val)) {
      h2.next = ptr.next;
      ptr.next = h2;
      return;
    }
    ptr = ptr.next;
  }
}
