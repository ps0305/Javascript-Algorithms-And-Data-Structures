# README

## Algorithm

- Dp function

```js
dp[i][j] = (() => {
  if (word1[i - 1] === word2[j - 1]) {
    return dp[i - 1][j - 1];
  }
  return Math.min(dp[i][j - 1] + 1, dp[i - 1][j] + 1, dp[i - 1][j - 1] + 1);
})();
```

- Optimize space complexity from O(m \* n) to O(n)
  - According to the Dp function, we only need current array and previous array. So we can create an array with size n for every m iteration.

```js
for (let i = 1; i <= m; i++) {
  const arr = new Array(n + 1).fill(0);
  arr[0] = i;
  for (let j = 1; j <= n; j++) {
    // prettier-ignore
    arr[j] = word1[i - 1] === word2[j - 1]
      ? dp[j - 1]
      : Math.min(arr[j - 1] + 1, dp[j] + 1, dp[j - 1] + 1);
  }
  dp = arr;
}
```

## Reference

- [https://blog.csdn.net/bbbeoy/article/details/79613826](https://blog.csdn.net/bbbeoy/article/details/79613826)

算法基本原理：假设我们可以使用 d[ i , j ]个步骤（可以使用一个二维数组保存这个值），表示将串 s[ 1…i ] 转换为 串 t [ 1…j ]所需要的最少步骤个数，那么，在最基本的情况下，即在 i 等于 0 时，也就是说串 s 为空，那么对应的 d[0,j] 就是 增加 j 个字符，使得 s 转化为 t，在 j 等于 0 时，也就是说串 t 为空，那么对应的 d[i,0] 就是 减少 i 个字符，使得 s 转化为 t。

然后我们考虑一般情况，加一点动态规划的想法，我们要想得到将 s[1..i]经过最少次数的增加，删除，或者替换操作就转变为 t[1..j]，那么我们就必须在之前可以以最少次数的增加，删除，或者替换操作，使得现在串 s 和串 t 只需要再做一次操作或者不做就可以完成 s[1..i]到 t[1..j]的转换。所谓的“之前”分为下面三种情况：

1）我们可以在 k 个操作内将 s[1…i] 转换为 t[1…j-1]

2）我们可以在 k 个操作里面将 s[1..i-1]转换为 t[1..j]

3）我们可以在 k 个步骤里面将 s[1…i-1] 转换为 t [1…j-1]

针对第 1 种情况，我们只需要在最后将 t[j] 加上 s[1..i]就完成了匹配，这样总共就需要 k+1 个操作。

针对第 2 种情况，我们只需要在最后将 s[i]移除，然后再做这 k 个操作，所以总共需要 k+1 个操作。

针对第 3 种情况，我们只需要在最后将 s[i]替换为 t[j]，使得满足 s[1..i] == t[1..j]，这样总共也需要 k+1 个操作。而如果在第 3 种情况下，s[i]刚好等于 t[j]，那我们就可以仅仅使用 k 个操作就完成这个过程。

最后，为了保证得到的操作次数总是最少的，我们可以从上面三种情况中选择消耗最少的一种最为将 s[1..i]转换为 t[1..j]所需要的最小操作次数。
