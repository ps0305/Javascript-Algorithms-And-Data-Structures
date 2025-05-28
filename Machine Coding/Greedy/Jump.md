You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:
> Input: nums = [2,3,1,1,4]
> Output: true
> Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

```js
function canJump(nums) {
    let maxReachable = 0; // The maximum index we can reach so far
    
    for (let i = 0; i < nums.length; i++) {
        // If the current index is beyond the max reachable index, we cannot proceed
        if (i > maxReachable) {
            return false;
        }
        // Update the max reachable index
        maxReachable = Math.max(maxReachable, i + nums[i]);
        // If the max reachable index reaches or exceeds the last index, we can reach it
        if (maxReachable >= nums.length - 1) {
            return true;
        }
    }
    
    return false;
}
```
#### Example:
Input: nums = [2, 3, 1, 1, 4]

1. maxReachable = 0
2. Iterating through nums:
* At index 0, nums[0] = 2, so maxReachable = Math.max(0, 0 + 2) = 2.
* At index 1, nums[1] = 3, so maxReachable = Math.max(2, 1 + 3) = 4.
* Since maxReachable >= nums.length - 1 is true at this point, we can return true.
Output: true

#### Complexity:
* Time complexity: O(n) where n is the size of the array, as we traverse the array once.
* Space complexity: O(1) because we only use a single variable to store the maximum reachable index.

```js
console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([0]));             // true
console.log(canJump([2, 0, 0]));       // true
```
