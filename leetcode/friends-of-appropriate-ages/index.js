/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
  // prettier-ignore
  const freq = ages
    .reduce((acc, cur) => {
      acc.set(cur, (acc.get(cur) || 0) + 1);
      return acc;
    }, new Map());
  let output = 0;
  for (const [A, nA] of freq) {
    for (const [B, nB] of freq) {
      if (request(A, B)) {
        output += A !== B ? nA * nB : nA * (nB - 1);
      }
    }
  }
  return output;
};

function request(A, B) {
  // prettier-ignore
  return !(
    B <= 0.5 * A + 7 ||
    B > A ||
    B > 100 && A < 100
  );
}
