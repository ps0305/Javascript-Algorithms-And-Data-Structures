let numbers = [1, 2, 3, 4, 5];

for (let n of numbers) {
  console.log(n);
}

function forOf(iterable) {
  if (typeof iterable[Symbol.iterator] === "function") {
    throw new Error("not iterable");
  }

  const it = iterable[Symbol.iterator]();
  let result = it.next();
  while (!result.done) {
    console.log(result.value);
    result = it.next();
  }
}

function myIterator() {
  let index = 0;
  return {
    next() {
      if (index < numbers.length) {
        return { value: numbers[index++] * 10, done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}
