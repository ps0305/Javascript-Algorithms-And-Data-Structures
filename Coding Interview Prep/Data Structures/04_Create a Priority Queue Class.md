A Priority Queue is a special type of Queue in which items may have additional information which specifies their priority.
This could be simply represented with an integer.
Item priority will override placement order in determining the sequence items are dequeued.
If an item with a higher priority is enqueued after items with lower priority, 
the higher priority item will be dequeued before all the others.

For instance, let’s imagine we have a priority queue with three items:

`[['kitten', 2], ['dog', 2], ['rabbit', 2]]`

Here the second value (an integer) represents item priority. If we enqueue `['human', 1]` with a priority of `1` (assuming lower priorities are given precedence) it would then be the first item to be dequeued. The collection would like this:

`[['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]`.

We’ve started writing a `PriorityQueue` in the code editor.
You will need to add an `enqueue` method for adding items with a priority,
a `dequeue` method for removing items, a `size` method to return the number of items in the queue,
a `front` method to return the element at the front of the queue,
and finally an `isEmpty` method that will return true if the queue is empty or false if it is not.

The enqueue should accept items with the format shown above `(['human', 1])` where `1` represents the priority.
The dequeue should return only the current item, not its priority.

```js
function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    this.enqueue = function(priorityItem) {
      let inserted = false;
      for (let i = 0; i < this.collection.length; i++) {
        let _value = this.collection[i];
        if (_value[1] > priorityItem[1]) {
          this.collection.splice(i, 0, priorityItem);
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        this.collection.push(priorityItem);
      }
    }

    this.dequeue = function() {
      let val = this.collection.shift();
      return val[0]
    }

    this.size = function() {
      return this.collection.length;
    }

    this.isEmpty = function() {
      return this.collection.length === 0;
    }

    this.front = function() {
      return this.collection[0]
    }  
}
