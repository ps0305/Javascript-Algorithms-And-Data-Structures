# README

## Algorithm

- For each iteration
  - Get reminder of `n % 16` by `&` with `15`
  - Divide n with 16 by right shifting without sign bits
    - `n = n >>> 4;`
    - https://stackoverflow.com/questions/10382122/what-is-operator-in-js

### Reminder of n % 16

```
  1011 1101
& 0000 1111
-----------
  0000 1101
```

### Right shifting without sign bits

```
n = 1011 1101
n >>> 4 = 0000 1011
```
