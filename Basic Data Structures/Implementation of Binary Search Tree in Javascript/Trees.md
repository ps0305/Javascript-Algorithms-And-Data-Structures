A tree is a data structure where a node can have zero or more children. Each node contains a value, and similar to graphs each node can have a connection between other
nodes called an edge. A tree is a type of graph but not all graphs are trees.

The top-most node is called the root. The DOM, or document object model, is a tree data structure. 

A node without children is called a leaf node.

The height of the tree is the distance between the farthest leaf node and the root node.

![image](https://user-images.githubusercontent.com/34129569/158032297-e2075025-4c71-4a7e-ad9c-d330c092ef7b.png)

## Binary Trees

Binary trees are a special type of tree in which each node can only have a maximum of two children: a left child and a right child.

![image](https://user-images.githubusercontent.com/34129569/158032318-88962e4b-a6c5-44fa-a6b4-5c28109e639d.png)

##  Binary Search Tree

```js
// Node class
class Node
{
	constructor(data)
	{
		this.data = data;
		this.left = null;
		this.right = null;
	}
}
```

As in the above code snippet we define a node class having three property data, left and right, Left and right are pointers to the left and right node in a Binary Search Tree. Data is initialized with data which is passed when object for this node is created and left and right is set to null.

Now let’s see an example of a Binary Search Tree class. 

```js
// Binary Search tree class
class BinarySearchTree
{
	constructor()
	{
		// root of a binary search tree
		this.root = null;
	}

	// function to be implemented
	// insert(data)
	// remove(data)
				

	// Helper function
	// findMinNode()
	// getRootNode()
	// inorder(node)
	// preorder(node)			
	// postorder(node)
	// search(node, data)
}
```

The above example shows a framework of a Binary Search tree class, which contains a private variable root which holds the root of a tree, it is initialized to null. 

Now lets implement each of this function: 

**1. insert(data)** – It inserts a new node in a tree with a value data

```js
// helper method which creates a new node to
// be inserted and calls insertNode
insert(data)
{
	// Creating a node and initialising
	// with data
	var newNode = new Node(data);
					
	// root is null then node will
	// be added to the tree and made root.
	if(this.root === null)
		this.root = newNode;
	else

		// find the correct position in the
		// tree and add the node
		this.insertNode(this.root, newNode);
}

// Method to insert a node in a tree
// it moves over the tree to find the location
// to insert a node with a given data
insertNode(node, newNode)
{
	// if the data is less than the node
	// data move left of the tree
	if(newNode.data < node.data)
	{
		// if left is null insert node here
		if(node.left === null)
			node.left = newNode;
		else

			// if left is not null recur until
			// null is found
			this.insertNode(node.left, newNode);
	}

	// if the data is more than the node
	// data move right of the tree
	else
	{
		// if right is null insert node here
		if(node.right === null)
			node.right = newNode;
		else

			// if right is not null recur until
			// null is found
			this.insertNode(node.right,newNode);
	}
}
```
