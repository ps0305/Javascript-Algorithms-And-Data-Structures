/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return '';
  }
  let prefix = strs[0];
  for (const str of strs) {
    while (prefix !== str.substring(0, prefix.length)) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};
