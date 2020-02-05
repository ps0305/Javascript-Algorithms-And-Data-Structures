/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
  this.map = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!(key in this.map)) {
    this.map[key] = [];
  }
  this.map[key].push([timestamp, value]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  if (!(key in this.map)) {
    return null;
  }
  const arr = this.map[key];
  const index = binarySearch(arr, ([t]) => timestamp <= t);
  if (index < arr.length && timestamp === arr[index][0]) {
    return arr[index][1];
  }
  if (index === 0 && timestamp < arr[index][0]) {
    return '';
  }
  return arr[index - 1][1];
};

function binarySearch(arr, comparator) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (comparator(arr[mid])) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
