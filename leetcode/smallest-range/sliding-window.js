/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
  const arr = nums
    .map((row, groupIndex) => row.map((val) => [val, groupIndex]))
    .reduce((acc, cur) => [...cur, ...acc], [])
    .sort((a, b) => a[0] - b[0]);
  const counter = new Counter({ n: nums.length });
  const output = [];
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    const [val, groupIndex] = arr[i];
    counter.add(groupIndex);
    while (counter.isMatch()) {
      // prettier-ignore
      const shouldUpdateOutput = !output.length ||
        val - arr[start][0] < output[1] - output[0] ||
        (val - arr[start][0] === output[1] - output[0] &&
          arr[start][0] < output[0] && val < output[1]);
      if (shouldUpdateOutput) {
        output[0] = arr[start][0];
        output[1] = val;
      }
      counter.delete(arr[start][1]);
      start += 1;
    }
  }
  return output;
};

class Counter {
  constructor({ n }) {
    this.nMatch = 0;
    this.n = n;
    this.group = new Array(n).fill(0);
  }

  isMatch() {
    return this.nMatch >= this.n;
  }

  add(groupIndex) {
    this.group[groupIndex] += 1;
    if (this.group[groupIndex] === 1) {
      this.nMatch += 1;
    }
  }

  delete(groupIndex) {
    this.group[groupIndex] -= 1;
    if (this.group[groupIndex] === 0) {
      this.nMatch -= 1;
    }
  }
}
