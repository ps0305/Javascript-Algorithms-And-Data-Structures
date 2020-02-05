## README

### Algorithm

```
           s | t
  insert:  ab acb
  delete:  acb ab
  replace: abc adc
```

- If difference in length is greater than 1, return false.
- Iterate over s and t, find out the first different character.
  - If `t.length > s.length`, insert a character to s at `i` and compare with t.
  - If `s.length > t.length`, delete a character from s at `i` and compare with t.
  - If `s.length === t.length`, replace a character in s at `i` and compare with t.
