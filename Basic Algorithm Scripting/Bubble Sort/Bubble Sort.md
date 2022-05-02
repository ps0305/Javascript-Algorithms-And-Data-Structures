Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.
Example: 

> First Pass: 
( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.

( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4

( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2

( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.

> Second Pass: 
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )

( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 )

Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.

> Third Pass: 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

Bubble sort is notorious for being non- performant, with a runtime of O(n^2).
You can use nested for-loops to code bubble sort, or a do while loop (which reads a bit
cleaner and can be more performant).

The do-while loop solution will stop once a full pass is completed without swapping any items. This contrasts the nested for-loop solution which will test every item against every
other regardless of if a swap has occurred.

Thus, with the do-while loop solution, even though the Big-O runtime remains O(n^2), as it’s the worst possible scenario, it’s not as likely to have a dataset which requires n^2
passes.

## Bubble Sort With For-Loops:

```js
function bubbleSortWithForLoops(arr) {
  for (var i = 0; i < arr.length; i++) {
      // Notice that j < (length - i)
      for (var j = 0; j < arr.length - i - 1; j++) {
        // Compare the adjacent positions
        if (arr[j] > arr[j + 1]) {
        // Swap the numbers
        // Temporary variable to hold the current number
        var tmp = arr[j]
        // Replace current number with adjacent number
        arr[j] = arr[j + 1]
      // Replace adjacent number with current number
      arr[j + 1] = tmp
      }
    }
  }
  return arr
}
```
## Bubble Sort With A Do-While Loop:

```js
function bubbbleSort(arr) {
   let swapped = false
    do {
    swapped = false
    arr.forEach((item, index) => {
      if (item > arr[index + 1]) {
        let temp = item
        arr[index] = arr[index + 1]
        arr[index + 1] = temp
      swapped = true
      }
    })
  } while (swapped)
    return arr
}
```

https://www.geeksforgeeks.org/bubble-sort/
