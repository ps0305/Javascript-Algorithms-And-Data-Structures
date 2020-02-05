# README

## Algorithm

-9 to base -2

```
-9 = -2 *  5 + 1
 5 = -2 * -2 + 1
-2 = -2 *  1 + 0
 1 = -2 *  0 + 1
```

Every time we take reminder to the output. Then we shift right `num` for 1 time and take negative sign. Repeat this process until `num` is equal to zero.

Noted that reminder is always positive.
