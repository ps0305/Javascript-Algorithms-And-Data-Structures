If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

```js
function multiplesOf3and5(number) {
  // Good luck!
  let list = [];
  for(let i = 1; i <= number; i++) {
    list.push(i)
  }
  //console.log(list)
  //return [...Array(number).keys()]
  return list.filter(num => num % 3 == 0 || num % 5 ==0)
  .reduce((acc,num) => acc + num)
  console.log(sum)
}

multiplesOf3and5(1000);
