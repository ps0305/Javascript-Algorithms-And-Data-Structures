/* global ListNode */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const listToStack = (node) => {
  const stack = [];
  let ptr = node;
  while (ptr) {
    stack.push(ptr);
    ptr = ptr.next;
  }
  return stack;
};

const stackToList = (stack) => {
  const root = stack.pop();
  let ptr = root;
  while (stack.length) {
    ptr.next = stack.pop();
    ptr = ptr.next;
  }
  return root;
};

var addTwoNumbers = function(l1, l2) {
  const stack1 = listToStack(l1);
  const stack2 = listToStack(l2);
  const stack3 = [];
  let carry = 0;
  while (stack1.length || stack2.length || carry > 0) {
    const ptr1 = stack1.pop();
    const ptr2 = stack2.pop();
    const sum = ((ptr1 && ptr1.val) || 0) + ((ptr2 && ptr2.val) || 0) + carry;
    const node = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    stack3.push(node);
  }
  return stackToList(stack3);
};
