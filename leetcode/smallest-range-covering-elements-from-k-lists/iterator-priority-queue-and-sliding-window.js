/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
  const counter = new Counter();
  const arr = [];
  const range = [-Infinity, Infinity];
  for (const [num, j] of createIterator(nums)) {
    counter.add(j);
    arr.push([num, j]);
    while (counter.nComplete === nums.length) {
      if (arr[arr.length - 1][0] - arr[0][0] < range[range.length - 1] - range[0]) {
        range[0] = arr[0][0];
        range[1] = arr[arr.length - 1][0];
      }
      counter.delete(arr[0][1]);
      arr.shift();
    }
  }
  return range;
};

function createIterator(nums) {
  return {
    [Symbol.iterator]() {
      const pq = new PriorityQueue({
        comparator: (a, b) => a[0][a[1]] <= b[0][b[1]],
      });
      for (let j = 0; j < nums.length; j++) {
        const arr = nums[j];
        pq.enqueue([arr, 0, j]);
      }
      return {
        next() {
          if (!pq.length) {
            return {
              done: true,
            };
          }
          const [arr, i, j] = pq.dequeue();
          if (i + 1 < arr.length) {
            pq.enqueue([arr, i + 1, j]);
          }
          return {
            done: false,
            value: [arr[i], j],
          };
        },
      };
    },
  };
}

class PriorityQueue {
  constructor({ comparator }) {
    this.comparator = comparator;
    this.arr = [];
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

  get length() {
    return this.arr.length;
  }
}

function moveUp(arr, i, comparator) {
  const p = Math.floor((i - 1) / 2);
  const isValid = p < 0 || comparator(arr[p], arr[i]);
  if (!isValid) {
    [arr[i], arr[p]] = [arr[p], arr[i]];
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

class Counter {
  constructor() {
    this.freq = {};
    this.nComplete = 0;
  }

  add(c) {
    this.freq[c] = (this.freq[c] || 0) + 1;
    if (this.freq[c] === 1) {
      this.nComplete += 1;
    }
  }

  delete(c) {
    this.freq[c] -= 1;
    if (this.freq[c] === 0) {
      this.nComplete -= 1;
    }
  }
}
