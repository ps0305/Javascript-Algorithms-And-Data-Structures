/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const group = {};
  for (const str of strs) {
    const key = encode(str);
    if (!(key in group)) group[key] = [];
    group[key].push(str);
  }
  return Object.values(group);
};

function encode(str) {
  return str
    .split('')
    .sort()
    .join('');
}
