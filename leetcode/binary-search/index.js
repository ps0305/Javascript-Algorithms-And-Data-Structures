/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const middle = Math.floor( ((left + right) / 2) );
        const current = nums[middle];
        
        if (current > target) {
            // ignore the right part from the array and the current index
            right = middle - 1;
        } else if (current < target) {
            // ignore the left part from the array and the current index
            left = middle + 1
        } else {
            return middle;
        }
    }
    // return -1 if middle did never equal the target
    return -1;
};
