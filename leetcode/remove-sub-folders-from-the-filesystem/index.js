/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
  folder.sort();
  const output = [];
  let parent = null;
  for (const path of folder) {
    if (!path.startsWith(parent)) {
      output.push(path);
      parent = path + '/';
    }
  }
  return output;
};
