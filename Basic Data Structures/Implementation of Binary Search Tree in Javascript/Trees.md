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

> A Binary Search tree is a binary tree in which nodes that have lesser value are stored on the left while the nodes with a higher value are stored at the right.

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

In the above code we have two methods insert(data) and insertNode(node, newNode). Let’s understand them one by one:- 

* **insert(data)** – It creates a new node with a value data, if the tree is empty it add this node to a tree and make it a root, otherwise it calls insert(node, data).
* **insert(node, data)** – It compares the given data with the data of the current node and moves left or right accordingly and recur until it finds a correct node with a null value where new node can be added.

**2.remove(data)** – This function removes a node with a given data.

```js
// helper method that calls the
// removeNode with a given data
remove(data)
{
	// root is re-initialized with
	// root of a modified tree.
	this.root = this.removeNode(this.root, data);
}

// Method to remove node with a
// given data
// it recur over the tree to find the
// data and removes it
removeNode(node, key)
{
		
	// if the root is null then tree is
	// empty
	if(node === null)
		return null;

	// if data to be delete is less than
	// roots data then move to left subtree
	else if(key < node.data)
	{
		node.left = this.removeNode(node.left, key);
		return node;
	}

	// if data to be delete is greater than
	// roots data then move to right subtree
	else if(key > node.data)
	{
		node.right = this.removeNode(node.right, key);
		return node;
	}

	// if data is similar to the root's data
	// then delete this node
	else
	{
		// deleting node with no children
		if(node.left === null && node.right === null)
		{
			node = null;
			return node;
		}

		// deleting node with one children
		if(node.left === null)
		{
			node = node.right;
			return node;
		}
		
		else if(node.right === null)
		{
			node = node.left;
			return node;
		}

		// Deleting node with two children
		// minimum node of the right subtree
		// is stored in aux
		var aux = this.findMinNode(node.right);
		node.data = aux.data;

		node.right = this.removeNode(node.right, aux.data);
		return node;
	}

}
```

In the above code we have two methods remove(data) and removeNode(node, data), let understand them one by one: 

* **remove(data)** – It is helper methods which call removeNode by passing root node and given data and updates the root of the tree with the value returned by the function
* **removeNode(node, data)** – It searches for a node with a given data and then perform certain steps to delete it.
* **Deleting the leaf node** – As leaf node does not have any children, hence they can be easily removed and null is returned to the parent node
* **Deleting a node with one child** – If a node has a left child, then we update the pointer of the parent node to the left child of the node to be deleted and similarly, if a node have a right child then we update the pointer of the parent node to the right child of the node to be deleted
* **Deleting a node with two children** – In order to delete a node with two children we find the node with minimum value in its right subtree and replace this node with the minimum valued node and remove the minimum valued node from the tree
