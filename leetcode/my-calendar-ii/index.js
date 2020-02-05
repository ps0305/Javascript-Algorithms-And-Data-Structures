var MyCalendarTwo = function() {
  this.events = [];
  this.overlapped = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
  const event = [start, end];
  for (const int of this.overlapped) {
    if (isOverlapped(event, int)) {
      return false;
    }
  }
  for (const int of this.events) {
    if (isOverlapped(event, int)) {
      const merged = merge(event, int);
      this.overlapped.push(merged);
    }
  }
  this.events.push(event);
  return true;
};

function merge(event1, event2) {
  return [Math.max(event1[0], event2[0]), Math.min(event1[1], event2[1])];
}

function isOverlapped(event1, event2) {
  if (!event1 || !event2) {
    return false;
  }
  if (event1[0] > event2[0]) {
    return isOverlapped(event2, event1);
  }
  return event2[0] < event1[1];
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
