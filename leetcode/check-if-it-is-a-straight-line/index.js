/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  const positions = uniq(coordinates);
  if (positions.length <= 1) {
    return false;
  }
  if (positions.length === 2) {
    return true;
  }
  if (isAllYAxis(coordinates)) {
    return true;
  }
  const slope0 = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);
  for (let i = 1; i < coordinates.length - 1; i++) {
    const slope =
      (coordinates[i + 1][1] - coordinates[i][1]) / (coordinates[i + 1][0] - coordinates[i][0]);
    if (slope !== slope0) {
      return false;
    }
  }
  return true;
};

function uniq(coordinates) {
  const visited = new Set();
  return coordinates.filter((coordinate) => {
    const key = coordinate + '';
    if (!visited.has(key)) {
      visited.add(key);
      return true;
    }
    return false;
  });
}

function isAllYAxis(coordinates) {
  for (let i = 0; i < coordinates.length - 1; i++) {
    if (coordinates[i][0] !== coordinates[i + 1][0]) {
      return false;
    }
  }
  return true;
}
