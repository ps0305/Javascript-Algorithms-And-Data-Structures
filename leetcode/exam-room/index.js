/**
 * @param {number} N
 */
var ExamRoom = function(N) {
  this.N = N;
  this.pq = new PriorityQueue({
    comparator: (a, b) => {
      const distA = getDist(N, a);
      const distB = getDist(N, b);
      if (distA !== distB) {
        return distA >= distB;
      }
      return a[0] <= b[0];
    },
  });
  this.pq.enqueue([-1, N]);
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
  const [start, end] = this.pq.dequeue();
  const [number, ...intervals] = seat(start, end, this.N);
  for (const interval of intervals) {
    this.pq.enqueue(interval);
  }
  return number;
};

/**
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
  const intervals = this.pq.arr.filter(([start, end]) => start === p || end === p);
  for (const interval of intervals) {
    this.pq.delete(interval);
  }
  const interval = merge(this.N, p, ...intervals);
  this.pq.enqueue(interval);
};

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */

function getDist(N, [start, end]) {
  if (start === -1 || end === N) {
    return end - start - 2;
  }
  return Math.floor((end - start - 1 - 1) / 2);
}

function seat(start, end, N) {
  if (start === -1) {
    return [0, [0, end]];
  } else if (end === N) {
    return [N - 1, [start, N - 1]];
  }
  const mid = Math.floor((start + end) / 2);
  return [mid, [start, mid], [mid, end]];
}

function merge(N, leaveNumber, ...args) {
  const [[start1, end1]] = args;
  if (args.length <= 1) {
    return leaveNumber === 0 ? [-1, end1] : [start1, N];
  }
  const [, [start2, end2]] = args;
  return [Math.min(start1, start2), Math.max(end1, end2)];
}

class PriorityQueue {
  constructor({ comparator, isEqual = (a, b) => a === b }) {
    this.comparator = comparator;
    this.isEqual = isEqual;
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

  delete(element) {
    const i = this.arr.findIndex((target) => this.isEqual(target, element));
    if (i >= 0) {
      this.arr[i] = this.arr[this.arr.length - 1];
      this.arr.pop();
      moveDown(this.arr, i, this.comparator);
    }
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
