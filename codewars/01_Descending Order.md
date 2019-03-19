Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
```html
Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 1254859723 Output: 9875543221
```

```js
function descendingOrder(n){
  let arr = n.toString().split('');
  let arrNum = [];
  console.log(arr);
  for(var i = 0; i < arr.length; i++){
    arrNum.push(parseInt(arr[i]));
    console.log(arrNum)
  }
  
  let sorted = arrNum.sort(function(a, b){return b-a});
  let sorted2 = sorted.join('');
  return parseInt(sorted2);
}

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}


function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}


function descendingOrder(n){
  
  n = [...n.toString()];
  
  return Number(
            n
            .sort()
            .reverse()
            .join('')
          );
}
