# README

## Algorithm

Create a map sorted from greatest to least. Also need to include edge cases.

ex:

```
I can be placed before V (5) and X (10) to make 4 and 9.
```

```js
['IX', 9];
```

```js
['IV', 4],
```

Iterate over map. For each iteration, we try to use the current value as much as possible. For each usage, we append the corresponding symbol to the output.
