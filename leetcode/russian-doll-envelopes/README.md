# README

## Algorithm

```js
// prettier-ignore
[2,3]
[4,6]
[3,7]
[4,8]
```

Suppose envelopes are given like like above. Basically we are looking for longest increasing size of envelopes. So first of all we can sort by width or height.

```js
// prettier-ignore
[2,3]
[3,7]
[4,8]
[4,6]
```

Since first dimension is sorted, if we find LIS by second dimension, then the result is longest increasing size of envelopes. However, there is one exceptional case. Consider following:

```js
// prettier-ignore
[4,5]
[4,6]
[4,7]
```

In this case, the result of LIS by second dimension is 3. But since they have the same width, result should be one. So here is the trick. We can sort the envelops with width asc height dsc. ex:

```js
// prettier-ignore
[2,3]
[3,7]
[4,7]
[4,6]
[4,5]
```

By sorting the envelops with width asc height dsc, heights with the same width will only be counted once. So in this case, the result of LIS by height is 3.
