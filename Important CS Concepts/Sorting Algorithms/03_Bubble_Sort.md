Our first sort! This is often the easiest to conceptualize and a natural way for the brain to think about sorting so it's typical to do bubble sort first. It's also amongst the least efficient in terms of worst case scenario.

In bubble sort, we're going to loop through the array and compare each index with the index next to it. 
If the those two numbers are out of order (the lesser index's value is greater than the greater index's value) we swap those two numbers' places in the array. We keep looping over that array until everything is in place and nothing was swapped during the last iteration.

What's the Big O on this? Well, 
there's an inner loop to check to see if indexes need to be swapped, and an outer loop that's just checking to see if anything was swapped. That would be make it O(n²). Not efficient, but a great learning tool. You'll never use bubble sort for anything serious.

```js
/*
  Write a bubble sort here
  Name the function bubbleSort
  
  If you want to suspend running the unit tests, change describe to xdescribe
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
  
  Provided is an optional visualization helper. Call snapshot(yourArray) at the
  beginning of each iteration of your inner loop with the state of the being-sorted
  array and the helper tool will show you how your array looks in the HTML section
  of CodePen. This is optional and only for your help.
  
  
*/

var bubbleSort = nums => {  
  do {
    var swapped = false;
    for (var i = 0; i < nums.length; i++) {
      snapshot(nums);
      if (nums[i] > nums[i+1]) {
        var temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  } while(swapped);
  snapshot(nums);
};

// unit tests
// do not modify the below code
describe('bubble sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    bubbleSort(nums);
    expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10]);
    done();
  });
});
