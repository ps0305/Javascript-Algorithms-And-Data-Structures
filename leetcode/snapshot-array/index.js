/* eslint-disable camelcase */
/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
  this.snapId = 0;
  this.arr = [...new Array(length)].map(() => [[this.snapId, 0]]);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  const i = lowerBound(this.arr[index], this.snapId);
  if (i >= this.arr[index].length) {
    this.arr[index].push([this.snapId, val]);
  }
  this.arr[index][i][1] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  return this.snapId++;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
  const i = lowerBound(this.arr[index], snap_id);
  if (i >= this.arr[index].length || this.arr[index][i][0] !== snap_id) {
    return this.arr[index][i - 1][1];
  }
  return this.arr[index][i][1];
};

function lowerBound(arr, target, comparator = (i) => target > arr[i][0]) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (comparator(mid)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
