class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (!isValid(this.length, index)) {
    return -1;
  }
  return getNth(this.head, index).val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  insertAfter(this.head, new Node(val));
  this.length += 1;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  insertAfter(this.tail.prev, new Node(val));
  this.length += 1;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index < 0 || index > this.length) {
    return;
  }
  insertAfter(getNth(this.head, index - 1), new Node(val));
  this.length += 1;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (!isValid(this.length, index)) {
    return;
  }
  disconnect(getNth(this.head, index));
  this.length -= 1;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

function isValid(length, index) {
  if (index < 0 || index >= length) {
    return false;
  }
  return true;
}

function insertAfter(source, target) {
  target.next = source.next;
  source.next.prev = target;
  source.next = target;
  target.prev = source;
}

function disconnect(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
}

function getNth(head, index) {
  let ptr = head;
  for (let i = 0; i <= index; i++) {
    ptr = ptr.next;
  }
  return ptr;
}
