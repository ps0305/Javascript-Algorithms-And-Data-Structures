/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
  const map = {};
  for (const string of strings) {
    const key = toKey(string);
    if (!(key in map)) map[key] = [];
    map[key].push(string);
  }
  return Object.values(map);
};

const baseCode = 'a'.charCodeAt(0);

function toKey(str) {
  const offset = str[0].charCodeAt(0) - baseCode;
  return str
    .split('')
    .map((c) => {
      // prettier-ignore
      const code = c.charCodeAt(0) - offset < baseCode
        ? c.charCodeAt(0) - offset + 26
        : c.charCodeAt(0) - offset;
      return String.fromCharCode(code);
    })
    .join('');
}
