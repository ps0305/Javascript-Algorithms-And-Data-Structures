Trees cans be a useful structure for a middle ground between LinkedLists and ArrayLists. We're going to look a simple flavor of trees: the trusty binary search tree. The gist of the BST is that a node in a BST has zero, one, or two subtrees. Every element in the left subtree is lesser than the value of the node and every node in the right is greater. By being able to depend on this fact, it makes it very simple to add and find new elements. Like LinkedLists, we just have to change pointers when we add new elements. Let's step through an add.

```
Current Tree:
      10
    /   \
  5      15
 / \     /
3   8   12

-> .add is called with 7
-> start at root (10)
-> lesser than 10, go left to 5
-> greater than 5, go right to 8
-> lesser than 8, go left
-> no element at left, create new node
   and make it the left subtree of 8

         10
       /   \
     5      15
    / \     /
   3   8   12
      /
     7
                    
BSTs get an average case of O(log n) on gets, adds, and deletes, but they can have a worst case of O(n) if you do something like add a sorted list to a BST. Go ahead, do a BST then add [1,2,3,4,5] to it.


1
 \
  2
   \
    3
     \
      4
       \
        5
  ```
```js
class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
    }
    else {
      let current = this.root;
      while(true) {
        if (current.value > value) {
          // go left
          
          if (current.left) {
            current = current.left;
          }
          else {
            current.left = new Node(value);
            break;
          }
        }
        else {
          // go right
          if (current.right) {
            current = current.right;
          }
          else {
            current.right = new Node(value);
            break;
          }    
        }
      }
    }
    return this;
  }
  toJSON() {
    return JSON.stringify(this.root.serialize(), null, 4);
  }
  toObject() {
    return this.root.serialize();
  }
}

class Node {
  constructor(value=null, left=null, right=null) {
    this.left = left;
    this.right = right;
    this.value = value;
  }
  serialize() {
    const ans = { value: this.value };
    ans.left = this.left === null ? null : this.left.serialize();
    ans.right = this.right === null ? null : this.right.serialize();
    return ans;
  }
}

// unit tests
// do not modify the below code
describe('Binary Search Tree', function() {
  it('creates a correct tree', () => {
    const nums = [3,7,4,6,5,1,10,2,9,8];
    const tree = new Tree();
    nums.map( num => tree.add(num));
    const objs = tree.toObject();
    render(objs, nums);

    expect(objs.value).toEqual(3);
    
    expect(objs.left.value).toEqual(1);
    expect(objs.left.left).toBeNull();
    
    expect(objs.left.right.value).toEqual(2);
    expect(objs.left.right.left).toBeNull();
    expect(objs.left.right.right).toBeNull();
    
    expect(objs.right.value).toEqual(7);
    
    expect(objs.right.left.value).toEqual(4);
    expect(objs.right.left.left).toBeNull();
    
    expect(objs.right.left.right.value).toEqual(6);
    expect(objs.right.left.right.left.value).toEqual(5);
    expect(objs.right.left.right.left.right).toBeNull();
    expect(objs.right.left.right.left.left).toBeNull();
    
    expect(objs.right.right.value).toEqual(10);
    expect(objs.right.right.right).toBeNull();
    
    expect(objs.right.right.left.value).toEqual(9);
    expect(objs.right.right.left.right).toBeNull();
    
    expect(objs.right.right.left.left.value).toEqual(8);
    expect(objs.right.right.left.left.right).toBeNull();
    expect(objs.right.right.left.left.left).toBeNull();
  });
});
