# README

## Algorithm

Use DFS to try every possible combinations. That is, for each worker, try assigning every bikes and return minimum result. In this process, there exists two ways to optimize.

- Memorize result
- If current dist is already greater than global min we've seen, there is no need to try.

### Memorize result

Here is the utility function that can be applied to any function requiring memorization.

```js
function memorize(fn, getKey = createKey) {
  const map = {};
  return (...args) => {
    const key = getKey(...args);
    if (key in map) {
      return map[key];
    }
    map[key] = fn(...args);
    return map[key];
  };
}

function createKey(workers, bikes, i, dist, visited) {
  return i + ':' + dist + ':' + visited;
}
```

### How to preserve the state of selected bikes ?

The easiest way to store selected state is to use an array as we usually do. However, it may take more time and memory to serialize the array to create key. And also in this question, there is a limit that `1 <= workers.length <= bikes.length <= 10`. So we can use following way.

We can use a 32 bits integer to represent at most 32 bikes selected state. ex.

```js
'00000000000000000000000000000000'; // represents no bike selected.
```

```js
'00000000000000000000000000100000'; // represents 5th bike selected.
```

```js
class Visited {
  constructor() {
    this.n = 0;
  }

  has(key) {
    return ((this.n >> key) & 1) === 1;
  }

  set(key) {
    const mask = 2 ** key;
    this.n = this.n | mask;
  }

  unset(key) {
    const mask = -1 ^ (2 ** key);
    this.n = this.n & mask;
  }

  toString() {
    return this.n + '';
  }
}
```
