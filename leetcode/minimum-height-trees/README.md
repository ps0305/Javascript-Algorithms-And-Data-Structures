## README

### Test Cases

```js
n = 6;
edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]];

n = 1;
edges = [];
```

### Algorithm

- `createGraph` from n nodes and edges
  - `const graph = [...new Array(n)].map(() => new Set());` `Set` is used because it's easier to do `delete` operation later on.
- Put leaves which are nodes with one edge into queue and remove those nodes from graph. After removing those node, if their sibilings become leaves, then put them into queue. Keep this process until there are less or equal to 2 nodes, then these 2 are our targets.
- Just like peeling onions. For each iteration, just remove outer leaves. Keep removing until n <= 2.
