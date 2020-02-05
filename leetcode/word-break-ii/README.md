## README

### Algorithm

```
dp(i): is word breakable of s.slice(0, i)
dp(i) = dp(i) ||
        dp(i - wordDict[j].length) if wordDict[j] is a postfix of s.slice(0, i) for j in wordDict
```
