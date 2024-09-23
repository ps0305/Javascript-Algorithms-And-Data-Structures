The **Sliding Window Maximum** problem can be efficiently solved using a deque (double-ended queue). The goal is to find the maximum value in every contiguous subarray (or "window") of size `k`.

### Problem Statement:
Given an array `nums` and a sliding window of size `k`, move the window from left to right across the array. At each step, return the maximum value of the current window.

### Approach:
- Use a **deque** to store the indices of elements in the current window.
- Ensure that the elements in the deque are always in **decreasing order**, meaning the element at the front of the deque is the largest in the current window.
- For each new element, remove elements from the deque that are:
  1. **Out of the window** (if their index is smaller than the start of the window).
  2. **Smaller than the current element** (as they can never be the maximum again for future windows).

### JavaScript Implementation:

```javascript
function maxSlidingWindow(nums, k) {
  let result = [];
  let deque = [];  // Will store indices of nums

  for (let i = 0; i < nums.length; i++) {
    // Remove elements that are out of the current window
    if (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }

    // Remove elements from deque that are smaller than the current element
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // Add the current element's index to the deque
    deque.push(i);

    // Start adding results to the output once we reach the k-th element
    if (i >= k - 1) {
      result.push(nums[deque[0]]);  // The front of the deque is the max in the window
    }
  }

  return result;
}
```

### Example Usage:

```javascript
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));  // Output: [3,3,5,5,6,7]
console.log(maxSlidingWindow([9,11], 2));               // Output: [11]
console.log(maxSlidingWindow([1,3,1,2,0,5], 3));        // Output: [3,3,2,5]
```

### Explanation:

1. **Deque as a Monotonic Queue**: 
   - The deque stores indices, and the elements corresponding to these indices are in decreasing order from front to back.
   - The first element of the deque always points to the largest element in the current window.
   
2. **Sliding the Window**:
   - As you move the window to the right, elements that are no longer within the window (`i - k + 1`) are removed from the front.
   - Any element smaller than the current element is removed from the back of the deque since they will never be the maximum as long as the current element is in the window.

3. **Adding Results**:
   - Once the index `i` reaches `k - 1`, we can start adding the maximum of each window (the element at the front of the deque) to the result array.

### Time Complexity:
- **O(n)**: Each element is pushed and popped from the deque at most once, leading to a linear time complexity.

This is an efficient solution compared to a brute-force approach that would take **O(n \* k)** time.
