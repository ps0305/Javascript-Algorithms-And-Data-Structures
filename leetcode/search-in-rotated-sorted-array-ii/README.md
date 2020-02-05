## README

### Test Cases

```
[4,5,6,7,0,1,2] // (4, 7) is sorted
[6,7,0,1,2,4,5] // (1, 5) is sorted
[0,1,2,4,5,6,7] // (0, 4) (4, 7) is sorted
```

```
[2,2,2,2,(2),4,5,1,2] // () => mark mid element
[2,2,2,(2),4,5,1,2]
[2,2,2,(4),5,1,2] => we find the range (2, 4) is sorted
```

For the cases containing duplicated elements, we are not able to check if given target is in the range. We can't exclude half elements everytime. So we need to exclude one element per iteration until we find the range.

### Analysis

Time Complexity: `O(klog(N))`
