Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
Algorithm 
To sort an array of size n in ascending order: 
* Iterate from arr[1] to arr[n] over the array. 
* Compare the current element (key) to its predecessor. 
* If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        const [item] = arr.splice(i, 1)
          arr.splice(j, 0, item)
      }
    }
  }
    return arr
}

```
