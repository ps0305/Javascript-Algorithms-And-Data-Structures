/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.st = new SegmentTree(0, nums.length);
  for (let i = 0; i < nums.length; i++) {
    this.st.update(i, nums[i]);
  }
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
  this.st.update(i, val);
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.st.query(i, j + 1);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */

class SegmentTree {
  constructor(start, end) {
    this.root = createTree(start, end);
  }

  update(i, val, node = this.root) {
    if (!(i >= node.start && i < node.end)) {
      return;
    }
    if (!node.left && !node.right) {
      node.val = val;
      return;
    }
    this.update(i, val, node.left);
    this.update(i, val, node.right);
    node.val = node.left.val + node.right.val;
  }

  query(start, end, node = this.root) {
    if (!node) {
      return 0;
    }
    if (node.start >= start && node.end <= end) {
      return node.val;
    }
    return this.query(start, end, node.left) + this.query(start, end, node.right);
  }
}

function createTree(start, end) {
  const root = new Node(start, end);
  const mid = Math.floor((start + end) / 2);
  if (end - start > 1) {
    root.left = createTree(start, mid);
    root.right = createTree(mid, end);
  }
  return root;
}

class Node {
  constructor(start, end, val = 0) {
    this.start = start;
    this.end = end;
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
