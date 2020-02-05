/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');
  const m = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < m; i++) {
    const v1 = i < arr1.length ? parseInt(arr1[i]) : 0;
    const v2 = i < arr2.length ? parseInt(arr2[i]) : 0;
    if (v1 !== v2) {
      return v1 < v2 ? -1 : 1;
    }
  }
  return 0;
};
