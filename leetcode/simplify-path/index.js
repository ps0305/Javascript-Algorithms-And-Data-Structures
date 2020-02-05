/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const paths = path.split('/');
  const output = [];
  for (const p of paths) {
    if (p === '.' || p === '') {
      continue;
    } else if (p === '..') {
      output.pop();
    } else {
      output.push(p);
    }
  }
  return '/' + output.join('/');
};
