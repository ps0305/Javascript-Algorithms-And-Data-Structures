var MyCalendar = function() {
  this.events = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  const event = [start, end];
  const i = upperBound(this.events, event);
  if (isOverlapped(this.events[i - 1], event) || isOverlapped(event, this.events[i])) {
    return false;
  }
  this.events.splice(i, 0, event);
  return true;
};

function isOverlapped(event1, event2) {
  if (!event1 || !event2) {
    return false;
  }
  return event2[0] < event1[1];
}

function upperBound(arr, event) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (event[0] >= arr[mid][0]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

/*
[[10,20],[20,30],[40,50]]
*/

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
