Queues are very similar to stacks however they use the “first-in-first- out” paradigm. This means that the oldest element (the element that was added first) is the next item to be
removed.
We can picture a queue like a queue of people waiting to buy movie tickets. The person who has been waiting in line the longest is the next person to be serviced.

![image](https://user-images.githubusercontent.com/34129569/155966629-5ade7b4d-30e3-465c-8347-4dcff7d92978.png)

## Queue Methods

Queues use three primary methods `( enqueue , dequeue , peek )` and several helper methods `( isEmpty , get length )`.

* enqueue() : Add an item to the back of the queue
* dequeue() : Remove an item from the front of the queue
* peek() : Return the item at the front of the queue (but do not remove it)
* isEmpty() : Check whether the queue is empty
* get length() : Return the length of the queue


### Coding A Queue In JavaScript

The first thing we’ll do is create a class Queue and give it a constructor with one property: queue. We will build this queue using an array. The front of the queue will be
the front of the array and the back of the queue, where we add new elements, will be the end of the array.

```js
export default class Queue {
  constructor() {
  this.queue = []
  }
}
```

First let’s create a length property which will return the length of the queue. We'll use a getter function so we can access the length with queue.length .

```js
get length() {
  return this.queue.length;
}
```
Now let’s write the enqueue method which will take an item and add it to our queue. Remember we’re adding items to the end of the array so we can use the native
array.push() method.

```js
enqueue(item) {
  this.queue.push(item);
}
```

The dequeue method will remove the element at the front of the queue. Since the front of our queue is the beginning of the array we can use the array.shift() method.

```js
dequeue() {
  return this.queue.shift();
}
```
To check which item is at the front of the array we can create a peek method. The item at the front of the queue is the first element in the queue array so we can access it with
array[0].

```js
peek() {
  return this.queue[0];
}
```

Finally let’s add a helper method, isEmpty , which returns a boolean value indicating whether or not the queue has items.

```js
isEmpty() {
  return this.length === 0;
}
```

## final code

```js
export default class Queue {
  constructor() {
    this.queue = [];
  }

  get length() {
    return this.queue.length;
  }

  enqueue (item) {
    return this.queue.push(item);
  }

  dequeue () {
    return this.queue.shift();
  }

  peek () {
    return this.queue[0];
  }

  isEmpty () {
    return this.length === 0;
  }
}
```
> **If the direction is reversed, we can replace unshift and pop with push and shift, respectively.**

```
class Queue {
  constructor(...items) {
    this.reverse = false;
    this.queue = [...items];
  }

  enqueue(...items) {
    return this.reverse
      ? this.queue.push(...items)
      : this.queue.unshift(...items);
  }

  dequeue() {
    return this.reverse ? this.queue.shift() : this.queue.pop();
  }
}
