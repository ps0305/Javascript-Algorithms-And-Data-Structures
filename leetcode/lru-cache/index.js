/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.length = 0;
  this.map = {};
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!(key in this.map)) {
    return -1;
  }
  const node = this.map[key];
  disconnect(node);
  insertAfter(this.head, node);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const node = (() => {
    if (key in this.map) {
      this.map[key].val = value;
      disconnect(this.map[key]);
      return this.map[key];
    }
    this.map[key] = new Node(key, value);
    this.length += 1;
    return this.map[key];
  })();
  insertAfter(this.head, node);
  if (this.length > this.capacity) {
    const last = this.tail.prev;
    disconnect(last);
    delete this.map[last.key];
    this.length -= 1;
  }
};

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

function insertAfter(n1, n2) {
  n1.next.prev = n2;
  n2.next = n1.next;
  n2.prev = n1;
  n1.next = n2;
}

function disconnect(node) {
  if (node.prev) {
    node.prev.next = node.next;
  }
  if (node.next) {
    node.next.prev = node.prev;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
