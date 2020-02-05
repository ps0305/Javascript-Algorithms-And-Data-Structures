/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function(n, k) {
  let pwd = '0'.repeat(n);
  const visited = new Set([pwd]);
  const nTotal = k ** n;
  while (visited.size < nTotal) {
    for (let i = k - 1; i >= 0; i--) {
      const word = pwd.substring(pwd.length - (n - 1)) + i;
      if (!visited.has(word)) {
        visited.add(word);
        pwd += i;
        break;
      }
    }
  }
  return pwd;
};
