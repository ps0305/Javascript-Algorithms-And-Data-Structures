# README

## Algorithm

```
1 -> A
2 -> B
3 -> C
...
26 -> Z
27 -> AA
28 -> AB
...
```

```js
701 = 26 * 26 + 25;
702 = 26 * 26 + 26;
```

Converting number to column title is similar to converting binary to hexidecimal except that title is 1-based.

Since char code is ranging from 1 to 26, we can't get code by using modulo directly. Reminder is always smaller than divisor (`26`). So we need to transform reminder so that it ranges from 1 to 26.

So for every iteration,

- Get reminder and transform it to range from 1 to 26.
- Get corresponding character.
- Update `num`. `num = Math.floor((num - r) / 26)`.
