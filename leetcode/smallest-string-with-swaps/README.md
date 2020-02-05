# README

## Algorithm

If there exists pairs like this:

```js
[[0, 3], [1, 2], [0, 2]];
```

Then charaters in 0 ~ 3 can be exchanged. So we just need to find out which indices are connected. In these connected indices, charaters are exchangeable. So `createDisjointSet` is used to group indices.

Then create a map mapping from root to selectable characters. Selectable characters should be sorted.

```js
s = 'dcab';
pairs = [[0, 3], [1, 2]];
```

```js
{
  0: ['d', 'b'],
  1: ['c', 'a'],
}
```

Finally, iterate over string and pick one smallest character each time to create output.
