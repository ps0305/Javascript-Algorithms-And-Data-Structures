# README

## Algorithm

```js
const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const D = 5;
```

- Min capacity is `Math.max(...weights)` which is `10`
- Max capacity is `sum(weights)` which is `weights.reduce((acc, cur) => acc + cur, 0)` === `55`

| 10      | ... | 55  |
| ------- | --- | --- |
| min day | ... | 1   |

- Greater capacity, less required days
- Capacity and days are sorted
- We can use binary search to search between min capacity and max capacity
