/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
  const stack = [];
  const length = getLength(head);
  const output = new Array(length).fill(0);
  let ptr = head;
  for (let i = 0; i < length; i++) {
    while (stack.length && ptr.val > stack[stack.length - 1][0].val) {
      const [node, index] = stack.pop();
      output[index] = ptr.val;
    }
    stack.push([ptr, i]);
    ptr = ptr.next;
  }
  while (stack.length) {
    const [, index] = stack.pop();
    output[index] = 0;
  }
  return output;
};

function getLength(head) {
  let length = 0;
  let ptr = head;
  while (ptr) {
    length += 1;
    ptr = ptr.next;
  }
  return length;
}
