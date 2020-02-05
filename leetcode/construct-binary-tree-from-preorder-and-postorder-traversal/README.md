# README

## Algorithm

```
preOrder  = root[left][right]
postOrder = [left][right]root
```

- It's not possible to construct an unique binary tree from pre order and post order.

1. Preprocess postorder array to create a map to map from value to index
2. Create tree recursively.

```js
var constructFromPrePost = function(pre, post) {
  const map = createMap(post);
  return createTree(pre, map, 0, pre.length, 0, post.length);
};
```

- We are using left closed right open interval. So `start = 0` and `end = pre.length`.

```js
function createTree(pre, map, i, j, p, q) {
  if (i >= j || p >= q) {
    return null;
  }
  const root = new TreeNode(pre[i]);
  if (j - i > 1) {
    const leftRoot = pre[i + 1];
    const index = map[leftRoot];
    const length = index - p;
    root.left = createTree(pre, map, i + 1, i + 1 + length, p, index, index, q);
    root.right = createTree(pre, map, i + 1 + length, j, index, q);
  }
  return root;
}
```

- When `i >= j` or `p >= q`, there is no element in the interval.
- `if (j - i > 1)`, there is more than one element in the interval. So we then construct left and right child.
