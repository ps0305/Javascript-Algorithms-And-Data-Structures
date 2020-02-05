/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
  this.m = 10000;
  this.arr = new Array(this.m).fill(null).map(() => new LinkedList());
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  const index = hashCode(this.m, key);
  const node = this.arr[index].getOrCreate(key);
  node.value = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  const index = hashCode(this.m, key);
  const node = this.arr[index].get(key);
  return node ? node.value : -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  const index = hashCode(this.m, key);
  this.arr[index].remove(key);
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

function hashCode(m, key) {
  return key % m;
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node();
  }

  getOrCreate(key) {
    let pre;
    let ptr = this.head;
    while (ptr) {
      if (ptr.key === key) {
        return ptr;
      }
      pre = ptr;
      ptr = ptr.next;
    }
    pre.next = new Node(key);
    return pre.next;
  }

  get(key) {
    let ptr = this.head;
    while (ptr) {
      if (ptr.key === key) {
        return ptr;
      }
      ptr = ptr.next;
    }
    return ptr;
  }

  remove(key) {
    let pre;
    let ptr = this.head;
    while (ptr) {
      if (ptr.key === key) {
        break;
      }
      pre = ptr;
      ptr = ptr.next;
    }
    if (ptr) {
      pre.next = ptr.next;
    }
  }
}
