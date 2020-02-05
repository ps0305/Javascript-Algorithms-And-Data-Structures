/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  const digitLogs = logs.filter((log) => {
    const [, word] = split(log);
    return isDigit(word);
  });
  const letterLogs = logs
    .filter((log) => {
      const [, word] = split(log);
      return !isDigit(word);
    })
    .sort((a, b) => {
      const [idA, wordA] = split(a);
      const [idB, wordB] = split(b);
      if (wordA !== wordB) {
        return wordA < wordB ? -1 : 1;
      }
      return idA < idB ? -1 : 1;
    });
  return [...letterLogs, ...digitLogs];
};

function split(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      return [str.substring(0, i), str.substring(i + 1)];
    }
  }
}

function isDigit(str) {
  return /[0-9]/.test(str[0]);
}
