/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let [candidate1, candidate2] = [null, null];
  let [count1, count2] = [0, 0];
  for (const num of nums) {
    if (num === candidate1) {
      count1 += 1;
    } else if (num === candidate2) {
      count2 += 1;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1 -= 1;
      count2 -= 1;
    }
  }
  return [candidate1, candidate2].filter(isMajority(nums));
};

function isMajority(arr) {
  return (target) => {
    let n = 0;
    for (const val of arr) {
      if (val === target) {
        n += 1;
      }
    }
    return n > arr.length / 3;
  };
}
