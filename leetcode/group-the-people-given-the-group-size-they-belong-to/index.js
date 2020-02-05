/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const map = {};
  const output = [];
  for (let i = 0; i < groupSizes.length; i++) {
    const size = groupSizes[i];
    if (!(size in map)) map[size] = [];
    map[size].push(i);
    if (map[size].length >= size) {
      output.push(map[size].splice(0, size));
    }
  }
  return output;
};
