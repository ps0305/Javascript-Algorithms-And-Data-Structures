Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then it merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.

![image](https://user-images.githubusercontent.com/34129569/165286910-06a13030-cd83-4fab-b703-6e7d98ae66b9.png)

```js
function merrgeSort(arr) {
  if (arr.length < 2) {
  return arr
  }
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
  const sorted = []
  while (left.length && right.length) {
  if (left[0] <= right[0]) {
  sorrted.push(left.shift())
  } else {
    sorted.push(right.shift())
  }
}
  let results = [...sorted, ...left, ...right]
  return results
}
```

```js
<script>

// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r)
{
	var n1 = m - l + 1;
	var n2 = r - m;

	// Create temp arrays
	var L = new Array(n1);
	var R = new Array(n2);

	// Copy data to temp arrays L[] and R[]
	for (var i = 0; i < n1; i++)
		L[i] = arr[l + i];
	for (var j = 0; j < n2; j++)
		R[j] = arr[m + 1 + j];

	// Merge the temp arrays back into arr[l..r]

	// Initial index of first subarray
	var i = 0;

	// Initial index of second subarray
	var j = 0;

	// Initial index of merged subarray
	var k = l;

	while (i < n1 && j < n2) {
		if (L[i] <= R[j]) {
			arr[k] = L[i];
			i++;
		}
		else {
			arr[k] = R[j];
			j++;
		}
		k++;
	}

	// Copy the remaining elements of
	// L[], if there are any
	while (i < n1) {
		arr[k] = L[i];
		i++;
		k++;
	}

	// Copy the remaining elements of
	// R[], if there are any
	while (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	}
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr,l, r){
	if(l>=r){
		return;//returns recursively
	}
	var m =l+ parseInt((r-l)/2);
	mergeSort(arr,l,m);
	mergeSort(arr,m+1,r);
	merge(arr,l,m,r);
}
```


