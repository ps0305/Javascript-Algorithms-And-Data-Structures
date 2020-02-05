/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
  const x = (tomatoSlices - 2 * cheeseSlices) / 2;
  const y = (4 * cheeseSlices - tomatoSlices) / 2;
  if (Number.isInteger(x) && x >= 0 && Number.isInteger(y) && y >= 0) {
    return [x, y];
  }
  return [];
};
