const Node = function(val) {
  this.val = val;
  this.rCount = 0;
  this.left = this.right = null;
};

const add = (root, val) => {
  if (!root) {
    return new Node(val);
  }
  let parent = null;
  let ptr = root;
  while (ptr) {
    parent = ptr;
    if (val >= ptr.val) {
      ptr.rCount += 1;
      ptr = ptr.right;
    } else if (val < ptr.val) {
      ptr = ptr.left;
    }
  }
  if (val < parent.val) {
    parent.left = new Node(val);
  } else if (val >= parent.val) {
    parent.right = new Node(val);
  }
  return root;
};

const findKth = (root, k) => {
  if (!root) {
    return -1;
  }
  if (k === root.rCount + 1) {
    return root.val;
  }
  if (k > root.rCount + 1) {
    return findKth(root.left, k - (root.rCount + 1));
  }
  if (k < root.rCount + 1) {
    return findKth(root.right, k);
  }
};

var KthLargest = function(k, nums) {
  this.k = k;
  for (let i = 0; i < nums.length; i++) {
    this.root = add(this.root, nums[i]);
  }
};

KthLargest.prototype.add = function(val) {
  this.root = add(this.root, val);
  return findKth(this.root, this.k);
};
