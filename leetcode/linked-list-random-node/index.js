/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  const sampler = new Sampler({ k: 1 });
  let ptr = this.head;
  while (ptr) {
    sampler.sample(ptr);
    ptr = ptr.next;
  }
  return sampler.arr[0].val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

class Sampler {
  constructor({ k }) {
    this.k = k;
    this.arr = [];
    this.i = 0;
  }

  sample(val) {
    if (this.i < this.k) {
      this.arr.push(val);
    } else {
      const r = Math.floor(Math.random() * (this.i + 1));
      if (r < this.arr.length) {
        this.arr[r] = val;
      }
    }
    this.i += 1;
  }
}
