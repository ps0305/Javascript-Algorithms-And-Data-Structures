/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  const map = new SequenceMap();
  for (const n of nums) {
    // pq containing n - 1
    const last = map.getOrCreate(n - 1);
    const length = last.size > 0 ? last.dequeue() : 0;
    // pq containing n
    const current = map.getOrCreate(n);
    current.enqueue(length + 1);
  }
  for (const n in map.map) {
    while (map.map[n].size) {
      const length = map.map[n].dequeue();
      if (length < 3) {
        return false;
      }
    }
  }
  return true;
};

class SequenceMap {
  constructor() {
    this.map = {};
  }

  getOrCreate(n) {
    if (!(n in this.map)) {
      this.map[n] = new PriorityQueue({
        comparator: (a, b) => a <= b,
      });
    }
    return this.map[n];
  }
}

class PriorityQueue {
  constructor({ comparator }) {
    this.arr = [];
    this.comparator = comparator;
  }

  enqueue(element) {
    this.arr.push(element);
    moveUp(this.arr, this.arr.length - 1, this.comparator);
  }

  dequeue() {
    const output = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    moveDown(this.arr, 0, this.comparator);
    return output;
  }

  get size() {
    return this.arr.length;
  }
}

function moveUp(arr, i, comparator) {
  const p = Math.floor((i - 1) / 2);
  const isValid = i === 0 || comparator(arr[p], arr[i]);
  if (!isValid) {
    [arr[p], arr[i]] = [arr[i], arr[p]];
    moveUp(arr, p, comparator);
  }
}

function moveDown(arr, i, comparator) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  const isValid =
    (left >= arr.length || comparator(arr[i], arr[left])) &&
    (right >= arr.length || comparator(arr[i], arr[right]));
  if (!isValid) {
    const next = right >= arr.length || comparator(arr[left], arr[right]) ? left : right;
    [arr[i], arr[next]] = [arr[next], arr[i]];
    moveDown(arr, next, comparator);
  }
}
