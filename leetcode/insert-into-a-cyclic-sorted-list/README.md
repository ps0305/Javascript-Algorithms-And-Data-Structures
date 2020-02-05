## README

### Test Cases

```js
list = [1, 1, 3, 3, 5, 7];
insert = 0;
insert = 1;
insert = 3;
insert = 8;

list = [3, 3, 3];
insert = 0;
insert = 3;
insert = 4;
```

### Algorithm

Iterate over the list and check if current position is suitable for insertion.

```js
// if all positions are not suitable, ex: [3, 3, 3, 3]
// then just insert at any position.
if (ptr === head) {
  return true;
}

// if ptr is at tail
if (ptr.val >= pre.val && ptr.val > ptr.next.val) {
  // if insertVal is greater than tail or if insertVal is smaller than head.
  return node.val >= ptr.val || node.val <= ptr.next.val;
} else {
  // if it's not head or tail, check if it's greater than ptr and smaller than next.
  return node.val >= ptr.val && node.val < ptr.next.val;
}
```
