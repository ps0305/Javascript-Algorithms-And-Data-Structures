/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  const freq = createFreq(tasks);
  const pq = new PriorityQueue({
    comparator: (a, b) => freq[a] > freq[b],
  });
  for (const t in freq) {
    pq.enqueue(t);
  }
  let nIntervals = 0;
  while (nIntervals < tasks.length || pq.length) {
    const next = [];
    let i = 0;
    while (pq.length && i < n + 1) {
      const t = pq.dequeue();
      nIntervals += 1;
      freq[t] -= 1;
      if (freq[t] > 0) {
        next.push(t);
      }
      i += 1;
    }
    if (next.length) {
      nIntervals += n + 1 - i;
    }
    for (const t of next) {
      pq.enqueue(t);
    }
  }
  return nIntervals;
};

function createFreq(tasks) {
  const freq = {};
  for (const t of tasks) {
    freq[t] = (freq[t] || 0) + 1;
  }
  return freq;
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
