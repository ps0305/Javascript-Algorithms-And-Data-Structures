Approach : Elementary Math

<img width="569" alt="Screenshot 2022-04-08 at 7 32 33 PM" src="https://user-images.githubusercontent.com/34129569/162451709-5de2bf3e-fa18-4025-946d-6b836cfad897.png">

Algorithm

Just like how you would sum two numbers on a piece of paper, 
we begin by summing the least-significant digits, which is the head of l1 and l2. Since each digit is in the range of 0 \ldots 90…9, summing two digits may "overflow". For example 5 + 7 = 12. In this case, we set the current digit to 2 and bring over the carry = 1 to the next iteration. carrycarry must be either 0 or 1 because the largest possible sum of two digits (including the carry) is 9 + 9 + 1 = 199+9+1=19.

The pseudocode is as following:

* Initialize current node to dummy head of the returning list.
* Initialize carry to 0.
* Initialize p1 and p2 to head of l1 and l2 respectively.
* Loop through lists l1l1 and l2l2 until you reach both ends.
* Set x to node pp's value. If p1 has reached the end of l1, set to 0.
* Set yy to node qq's value. If qq has reached the end of l2, set to 0.
* Set sum = x + y + carry.
* Update carry = sum / 10.
* Create a new node with the digit value of (sum mod 10) and set it to current node's next, then advance current node to next.
* Advance both p1 and p2.
* Check if carry = 1, if so append a new node with digit 11 to the returning list.
* Return dummy head's next node.

```js
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
var addTwoNumbers = function(l1, l2) {
  const dummy = new ListNode();
  let ptr = dummy;
  let p1 = l1;
  let p2 = l2;
  let c = 0;
  while (p1 || p2 || c) {
    const sum = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + c;
    c = Math.floor(sum / 10);
    ptr.next = new ListNode(sum % 10);
    ptr = ptr.next;
    p1 = p1 ? p1.next : p1;
    p2 = p2 ? p2.next : p2;
  }
  return dummy.next;
};
