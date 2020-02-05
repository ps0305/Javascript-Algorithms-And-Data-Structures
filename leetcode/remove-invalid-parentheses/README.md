# READMD

## Algorithm

Given a str `s = ()())()`. Because we don't know by removing which parentheses will result in valid one, we try every possiblity with BFS.

```
candidate0 = )())()
candidate1 = (())()
candidate2 = ()))()
candidate3 = ()()()
candidate4 = ()()()
candidate5 = ()()))
candidate6 = ()())(
```

If we find a valid one, put it into output. Since we are using BFS approach, when we find out a valid one, we find out the minimal solution and no longer need to keep adding candidates.

Candidates are created by removing one character each time, so there are chances that we create duplicated candidates. So we can use `visisted` to cache candidates that have been created before.
