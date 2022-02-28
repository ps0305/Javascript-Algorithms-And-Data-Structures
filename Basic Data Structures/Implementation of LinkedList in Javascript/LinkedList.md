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
class LinkedList {
  constructor() {
  this.head = null
  this.tail = null
  this.length = 0
  }
}
```

push(value) {
  const newNode = new Node(value);
  if (this.isEmpty()) {
  this.head = newNode;
  this.tail = newNode;
  } else {
  this.tail.next = newNode;
  this.tail = newNode;
  }
this.push


