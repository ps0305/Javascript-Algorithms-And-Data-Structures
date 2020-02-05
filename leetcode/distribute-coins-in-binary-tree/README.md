# README

## Algorithm

For each subtree,

```
number of moves required = Math.abs(number of coins - number of nodes)
```

It means number of moves required to make this subtree balanced. So the total number of moves is equal to `number of moves required` for each subtree.

So given a root, we ask its children recursively for number of nodes, number of coins and number of moves, then we can compose result for the given root.
