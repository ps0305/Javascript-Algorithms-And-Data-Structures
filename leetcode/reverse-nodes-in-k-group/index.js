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

const getLength = (head) => {
  let ptr = head;
  let length = 0;
  while (ptr) {
    length += 1;
    ptr = ptr.next;
  }
  return length;
};

const reverseK = (head, k) => {
  let pre = null;
  let ptr = head;
  let next;
  for (let i = 0; i < k; i++) {
    next = ptr.next;
    ptr.next = pre;
    pre = ptr;
    ptr = next;
  }
  const tail = head;
  tail.next = ptr;
  return {
    head: pre,
    tail,
  };
};

var reverseKGroup = function(head, k) {
  const n = Math.floor(getLength(head) / k);
  const dummy = new ListNode();
  dummy.next = head;
  let ptr = dummy;
  for (let i = 0; i < n; i++) {
    const result = reverseK(ptr.next, k);
    ptr.next = result.head;
    ptr = result.tail;
  }
  return dummy.next;
};
