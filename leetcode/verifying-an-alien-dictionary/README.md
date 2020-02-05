## README

### Algorithm

- Iterate over words. For each sibiling pairs, they should be sorted. So we can verify each pair.
- Iterate over characters of the pair, find out the first character that is different.
  - If `words[i]` is shorter, it's valid.
  - If `words[i + 1]` is shorter, it's invalid.
  - If `words[i][j]` comes after words`[i + 1][j]`, it's invalid.
