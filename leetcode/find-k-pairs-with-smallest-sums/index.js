/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  if (!nums1.length || !nums2.length) {
    return [];
  }
  const output = [];
  const visited = new Set();
  const pq = new PriorityQueue({
    comparator: (a, b) => nums1[a[0]] + nums2[a[1]] < nums1[b[0]] + nums2[b[1]],
  });
  pq.enqueue([0, 0]);
  while (pq.length && output.length < k) {
    const [i, j] = pq.dequeue();
    const key = [i, j] + '';
    if (visited.has(key)) continue;
    visited.add(key);
    output.push([nums1[i], nums2[j]]);
    if (i + 1 < nums1.length) {
      pq.enqueue([i + 1, j]);
    }
    if (j + 1 < nums2.length) {
      pq.enqueue([i, j + 1]);
    }
  }
  return output;
};

class PriorityQueue {
  constructor({ comparator }) {
    this.arr = [];
    this.comparator = comparator;
  }

  enqueue(element) {
    this.arr.push(element);
    bubbleUp(this.arr, this.arr.length - 1, this.comparator);
  }

  dequeue() {
    const output = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    bubbleDown(this.arr, 0, this.comparator);
    return output;
  }

  get length() {
    return this.arr.length;
  }
}

function bubbleUp(arr, i, comparator) {
  const p = Math.floor((i - 1) / 2);
  const isValid = p < 0 || comparator(arr[p], arr[i]);
  if (!isValid) {
    [arr[i], arr[p]] = [arr[p], arr[i]];
    bubbleUp(arr, p, comparator);
  }
}

function bubbleDown(arr, i, comparator) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  const isValid =
    (left >= arr.length || comparator(arr[i], arr[left])) &&
    (right >= arr.length || comparator(arr[i], arr[right]));
  if (!isValid) {
    const next = right >= arr.length || comparator(arr[left], arr[right]) ? left : right;
    [arr[i], arr[next]] = [arr[next], arr[i]];
    bubbleDown(arr, next, comparator);
  }
}
