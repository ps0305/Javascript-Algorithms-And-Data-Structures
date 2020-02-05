const Node = function(count) {
  this.count = count;
  this.keys = new Set();
  this.next = this.prev = null;
};

const insertAfter = (r1, r2) => {
  r2.next = r1.next;
  r2.prev = r2.next.prev;
  r1.next = r2;
  r2.next.prev = r2;
  r2.prev.next = r2;
};

const disconnect = (r) => {
  r.prev.next = r.next;
  r.next.prev = r.prev;
};

/**
 * Initialize your data structure here.
 */
var AllOne = function() {
  this.counts = {};
  this.nodes = {};
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
  if (!(key in this.counts)) this.counts[key] = 0;
  this.counts[key] += 1;
  const count = this.counts[key];
  if (!(count in this.nodes)) {
    this.nodes[count] = new Node(count);
    this.nodes[count].keys.add(key);
    const position = count - 1 in this.nodes ? this.nodes[count - 1] : this.head;
    insertAfter(position, this.nodes[count]);
  } else {
    this.nodes[count].keys.add(key);
  }
  if (count - 1 in this.nodes) {
    this.nodes[count - 1].keys.delete(key);
    if (this.nodes[count - 1].keys.size <= 0) {
      disconnect(this.nodes[count - 1]);
      delete this.nodes[count - 1];
    }
  }
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
  if (!(key in this.counts)) return;
  this.counts[key] -= 1;
  const count = this.counts[key];
  if (!(count in this.nodes)) {
    this.nodes[count] = new Node(count);
    this.nodes[count].keys.add(key);
    const position = this.nodes[count + 1];
    insertAfter(position.prev, this.nodes[count]);
  } else {
    this.nodes[count].keys.add(key);
  }
  if (count + 1 in this.nodes) {
    this.nodes[count + 1].keys.delete(key);
    if (this.nodes[count + 1].keys.size <= 0) {
      disconnect(this.nodes[count + 1]);
      delete this.nodes[count + 1];
    }
  }
  if (count === 0) {
    disconnect(this.nodes[count]);
    delete this.nodes[count];
  }
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
  if (Object.keys(this.counts).length <= 0) return '';
  const keys = this.tail.prev.keys;
  return keys.values().next().value;
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
  if (Object.keys(this.counts).length <= 0) return '';
  const keys = this.head.next.keys;
  return keys.values().next().value;
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = Object.create(AllOne).createNew()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
