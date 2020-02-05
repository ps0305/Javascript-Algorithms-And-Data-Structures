## README

### Test Cases

```
[4,5,6,7,0,1,2] // (4, 7) is sorted
[6,7,0,1,2,4,5] // (1, 5) is sorted
[0,1,2,4,5,6,7] // (0, 4) (4, 7) is sorted
```

There will always be one side sorted. So we can check if given target is in the range to include or exclude the range.

### Analysis

Time Complexity: `O(log(N))`
