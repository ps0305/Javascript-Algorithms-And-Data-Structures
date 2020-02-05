/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  const { arr, sample } = createSampler({ k: 1 });
  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] === target) {
      sample(i);
    }
  }
  return arr.pop();
};

function createSampler({ k }) {
  const arr = [];
  let i = 0;
  return {
    sample(element) {
      if (i < k) {
        arr.push(element);
      } else {
        const r = Math.floor(Math.random() * (i + 1));
        if (r < k) {
          arr[r] = element;
        }
      }
      i += 1;
    },
    arr,
  };
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
