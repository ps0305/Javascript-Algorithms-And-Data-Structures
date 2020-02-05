/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists.length) {
    return null;
  }
  while (lists.length > 1) {
    const merged = merge(lists.shift(), lists.shift());
    lists.push(merged);
  }
  return lists.pop();
};

function merge(l1, l2) {
  const dummy = new ListNode();
  let ptr = dummy;
  let p1 = l1;
  let p2 = l2;
  while (p1 || p2) {
    if (!p1 || !p2) {
      ptr.next = p1 || p2;
      return dummy.next;
    }
    if (p1.val < p2.val) {
      ptr.next = p1;
      p1 = p1.next;
    } else {
      ptr.next = p2;
      p2 = p2.next;
    }
    ptr = ptr.next;
  }
  return dummy.next;
}
