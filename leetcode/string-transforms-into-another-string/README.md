# README

## Algorithm

If `str1[i]` not in map, create a map from `str1[i]` to str2[i].
If `str1[i]` in map, check if it's map to the same value. If not, it means the same charater has two mapping, should return false.

Finally, we should check number of unique charaters of str2 should be less than 26.

```js
'abcdefghijklmnopqrstuvwxyz';
'bcdefghijklmnopqrstuvwxyzq';
```

in the case of less than 26, it's possible to do temporary conversions. ex: transform `p => z`, `z => q`,...
otherwise, it's not able to do a temporary conversion.

## Reference

- [https://leetcode.com/problems/string-transforms-into-another-string/discuss/355412/Python-simple-O(n)-with-explanation](<https://leetcode.com/problems/string-transforms-into-another-string/discuss/355412/Python-simple-O(n)-with-explanation>)
