/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const split = (head) => {
  let slow = head;
  let fast = head;
  let pre = null;
  let next;
  while (fast && fast.next) {
    fast = fast.next.next;
    next = slow.next;
    slow.next = pre;
    pre = slow;
    slow = next;
  }
  if (!fast) {
    return [pre, slow];
  }
  return [pre, slow.next];
};

const isEqual = (h1, h2) => {
  let p1 = h1;
  let p2 = h2;
  while (p1 && p2) {
    if (p1.val !== p2.val) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  if (p1 || p2) {
    return false;
  }
  return true;
};

var isPalindrome = function(head) {
  if (!head) {
    return true;
  }
  return isEqual(...split(head));
};
