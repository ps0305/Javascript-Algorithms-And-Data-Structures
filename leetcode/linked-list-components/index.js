/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
  const set = new Set(G);
  let ptr = head;
  let nConnected = 0;
  while (ptr) {
    nConnected += set.has(ptr.val) ? 1 : 0;
    while (ptr && set.has(ptr.val)) {
      ptr = ptr.next;
    }
    if (ptr) {
      ptr = ptr.next;
    }
  }
  return nConnected;
};
