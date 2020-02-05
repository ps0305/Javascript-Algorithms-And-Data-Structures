# README

## Algorithm

The most difficult part of this question is to list all possible test cases. So let't list some test cases first.

```js
1 / 3 = 0.(3)
1 / 6 = 0.1(6)
-1 / 333 = -0.(003)

0.12(34)
```

Because input are two integers, we need to handle sign. The cleanest way is to handle sign in the beginning and do the math with two positive integers.

Use `num` to store reminder and `output` to store output. While `num` is greater than zero, we keep dividing it by `denominator`. In the beginning of each iteration, if we found `num` has visited before, then we found the repeating part. If no repeating part is found, we append `num / denominator` to the output, update `num` and also add `num` to `visited`. We keep running this process until num is less or equal to zero.
