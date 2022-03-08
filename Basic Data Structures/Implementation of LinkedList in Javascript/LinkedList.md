Linked lists are a series of linked nodes where each node points to the next node in the list. Each node has a value and a pointer to the next node. There are also doubly-linked
lists in which each node also points to the previous node in the list.

Linked lists use the “last-in-first-out” method (similar to a stack) where nodes are added to and deleted from the same end.

To search for a node in a linked list we have to start at the head node (the first node in the list) and iterate through each node until we find it or reach the end of the list.

![image](https://user-images.githubusercontent.com/34129569/156056181-5a856114-413c-41bb-aa7e-df7c49353f9f.png)


## Linked List Methods
Linked lists use two primary methods ( push , pop ) and several helper methods ( get index , delete , isEmpty ).

* push(Node) : Add an element to the linked list
* pop() : Remove an element from the linked list
* get(index) : Return an element from a given index (but don't remove it)
* delete(index) : Delete an item from a given index
* isEmpty() : Return a boolean indicating whether the list is empty

### Coding A Linked List In JavaScript

Let’s first build our Node class. Nodes have a value and a pointer to the next node (for singly-linked lists, which is what we’ll be building). When we create a new node we will
pass the value to the constructor. We will also initialize the pointer to null (as we’re adding this node to the end of the list).

```js
class Node {
  constructor(value) {
  this.value = value
  this.next = null
  }
}
```

Now we can create our Linked List class. The constructor will keep track of three things: The head and tail pointers will be null until we add our first node.

* head : The head pointer that keeps track of the first node in the linked list
* tail : The tail pointer that keeps track of the last node in the linked list
* length : The number of nodes in the list

```js
class Node {
  // while creating a node, we'll pass the value to the constructor and inititialize the pointer with null
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  // Adding Nodes to Linked Lists
  // we have two scenarios

  // the List is empty
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // the List has at least one node

      // If the list is not empty we have to first set the current tail node’s pointer to the new node.
      // Then we can set `this.tail` to the new node and increment the list length
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }


  // Removing Nodes to Linked Lists
  // the list is empty

  pop() {
    if (this.isEmpty()) {
      return null;
    } else if (this.length === 1) {
      /* There is one node in the list */
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;

      return nodeToRemove;
    } else {
      /* There are multiple nodes in the list */

      // Start our pointer at the head
      let currentNode = this.head;
      // We're removing the last node in the list
      let nodeToRemove = this.tail;
      // This will be our new tail
      let secondToLastNode;
      while (currentNode) {
        if (currentNode.next === this.tail) {
          secondToLastNode = currentNode;
          break;
        }
        currentNode = currentNode.next;
      }
      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      this.length--;

      return nodeToRemove;
    }
  }

  // Getting nodes from Linked List
  get(index) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    }
    /* We want the first node */
    if (index === 0) {
      return this.head;
    }
    //  we want the last node
    if (index === this.length - 1) {
      return this.tail;
    }

    // we want a node somewhere in the list
    let currentNode = this.head;
    let iterator = 0;
    while (iterator < index) {
      iterator++;
      currentNode = currentNode.next;
    }
  
    return currentNode;
  }

}


