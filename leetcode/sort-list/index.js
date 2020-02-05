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

const getHalfPtr = (head) => {
  let slow = head;
  let fast = head;
  let pre = slow;
  while (fast) {
    pre = slow;
    slow = slow.next;
    fast = (fast.next && fast.next.next) || null;
  }
  pre.next = null;
  return slow;
};

const merge = (h1, h2) => {
  const dummy = new ListNode();
  let ptr = dummy;
  let ptr1 = h1;
  let ptr2 = h2;
  while (ptr1 || ptr2) {
    if (!ptr1 || !ptr2) {
      ptr.next = ptr1 || ptr2;
      break;
    } else if (ptr1.val <= ptr2.val) {
      ptr.next = ptr1;
      ptr = ptr.next;
      ptr1 = ptr1.next;
    } else if (ptr2.val <= ptr1.val) {
      ptr.next = ptr2;
      ptr = ptr.next;
      ptr2 = ptr2.next;
    }
  }
  return dummy.next;
};

var sortList = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let right = getHalfPtr(head);
  let left = sortList(head);
  right = sortList(right);
  return merge(left, right);
};
