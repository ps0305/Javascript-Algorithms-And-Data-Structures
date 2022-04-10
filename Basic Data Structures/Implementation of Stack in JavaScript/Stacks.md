 Stack is a very useful data structure and has a wide range of application. Stack is a linear data structure in which addition or removal of element follows a particular order i.e. LIFO(Last in First Out) AND FILO(First in Last Out).
 
 ![image](https://user-images.githubusercontent.com/34129569/155961873-a9b4a17e-f47b-444d-8898-66aeb0a44c49.png)

## Stack Methods
There are three primary methods ( push , pop , peek ) in a stack and a few additional
methods (isEmpty, get length) you may add to help with different tasks.

* pop() : Removes the top item from the stack
* push(item) : Adds an item to the top of the stack
* peek() : Returns the item at the top of the stack (but does not remove it)
* isEmpty() : Returns true if the stack is empty
* get length() : Returns the number of items in the stack

# Coding A Stack In JavaScript
I’ll be coding this stack using JavaScript’s class notation, but you can also create a stack with functions.

The first thing we’ll do is create a class Stack and give it a `constructor` with one propert stack. We will build this stack using an array. The top of the stack will be the end of the
array and the bottom of the stack will be the beginning of the array.

I'm structuring my stack in this manner so I can use the native `array.push()` and `array.pop()` methods. If we wanted to add and remove items from the beginnning of t
array instead of the end we would have to use `array.unshift()` and `array.shift()`

```js
class Stack {
  constructor() {
  this.stack = []
  }
}
```

First let’s create our length getter function. This will keep track of the number of items in our stack.

I'm using a `getter` function so I can access the stack's length with stack.length as opposed to creating a function `getLength()` which has to be called each time I want to
check the length.

```js
get length() {
  return this.stack.length;
}
```

Now let’s create the push method which adds an element to the top of the stack. We can use the array.push() method (since the top of our stack is the end of the array).
This method takes one argument: the item to add.

```js
push(item) {
  return this.stack.push(item);
}
```
Next let’s create the pop method which removes the top element from the stack and returns it. Since we’ve set the top of the stack to the end of the array we can use the
array.pop() method.

```js
pop() {
  return this.stack.pop();
}
```

To see which element lives at the top of the stack we can create a peek method. We just have to check which item lives in the last index of our stack array.

```js
peek() {
  return this.stack[this.length - 1];
}
```

We may also want to have a helper function to check whether our stack is empty. You can of course omit this method and just check this.length === 0 , however I personally like
having this helper function.

```js
isEmpty() {
  return this.length === 0;
}
```

### Here is our finalized stack code.

```js
export default class Stack {
  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  push (item) {
    return this.stack.push(item);
  }

  pop () {
    return this.stack.pop();
  }

  peek () {
    return this.stack[this.stack.length - 1];
  }

  isEmpty () {
    return this.length === 0;
  }
}
```

> Notice that we can reverse the order of the stack: the bottom becomes the top and the top becomes the bottom. As such, we can use the array’s unshift and shift methods in place of push and pop, respectively.

```js
class Stack {
  constructor(...items) {
    this.reverse = false;
    this.stack = [...items];
  }

  push(...items) {
    return this.reverse
      ? this.stack.unshift(...items)
      : this.stack.push(...items);
  }

  pop() {
    return this.reverse ? this.stack.shift() : this.stack.pop();
  }
}

```

> **As the number of items grows, push/pop becomes increasingly more performant than unshift/shift because every item needs to be reindexed in the latter but not the former**.
