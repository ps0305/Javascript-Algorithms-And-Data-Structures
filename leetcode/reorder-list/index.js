/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

const split = (head) => {
  let slow = head;
  let fast = head;
  let pre;
  while (fast && fast.next) {
    pre = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  if (pre) {
    pre.next = null;
  }
  return slow;
};

const reverse = (head) => {
  let pre = null;
  let ptr = head;
  let next;
  while (ptr) {
    next = ptr.next;
    ptr.next = pre;
    pre = ptr;
    ptr = next;
  }
  return pre;
};

const merge = (h1, h2) => {
  const dummy = new ListNode();
  let ptr = dummy;
  let p1 = h1;
  let p2 = h2;
  let i = 0;
  while (p1 || p2) {
    if (!p1 || !p2) {
      ptr.next = p1 || p2;
      return dummy.next;
    } else if (i % 2 === 0) {
      ptr.next = p1;
      ptr = ptr.next;
      p1 = p1.next;
    } else if (i % 2 === 1) {
      ptr.next = p2;
      ptr = ptr.next;
      p2 = p2.next;
    }
    i += 1;
  }
  return dummy.next;
};

var reorderList = function(head) {
  if (!head || !head.next) {
    return head;
  }
  merge(head, reverse(split(head)));
};
