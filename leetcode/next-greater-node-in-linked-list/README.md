# README

## Algorithm

- In the process of iteration, we maintain a monotonic decreasing stack. By having this stack, when visiting each node, we can easily know which nodes are smaller than the current node. For those nodes smaller than the current one, we pop it out and set those values to the value of the current node.

```js
arr = [3, 2, 1, 5];
// i = 0, stack = [[3, 0]]
// i = 1, stack = [[3, 0], [2, 1]]
// i = 2, stack = [[3, 0], [2, 1], [1, 2]]
// i = 3, stack = []
```

Because `arr[3] > stack[stack.length - 1]`, we pop it out and set `arr[2]` to `5`
