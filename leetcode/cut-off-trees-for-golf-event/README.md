# README

## Algorithm

```js
// prettier-ignore
[
 [2,3,4],
 [0,5,0],
 [0,0,0]
]
```

```js
// prettier-ignore
const nSteps =
  dist([0, 0], [0, 0]) +
  dist([0, 0], [0, 1]) +
  dist([0, 1], [0, 2]) +
  dist([0, 2], [1, 2]);
```

- In order to cut off all the trees in the order of tree's height, we need to get the positions of all the trees and sort it by height. So that we can get the position of next destination easily.
- For each iteration, we are going to compute the distance between two postions by using BFS.
