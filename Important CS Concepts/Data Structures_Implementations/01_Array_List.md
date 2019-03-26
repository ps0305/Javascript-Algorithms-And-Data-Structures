We are going to talk about two types of implementations of array, ArrayList and LinkedList (terms we're borrowing from Java.) What we're going to do is to approximate how these work underneath the hood; in reality since JavaScript is a garbage-collected language that you don't have worry about allocation and de-allocation, it is simplified.

ArrayList is done by directly interacting with an allocated piece of memory. You then interact with that allocated piece of memory by addressing the specific indices in the array. In other words, you just treat it like a normal array. However things get a bit more complicated when deleting items from an ArrayList: you have to collapse the list down to the spot where you deleted.

```js
[a,b,c,d,e,f,g]
-> delete index 3
-> array is [a,b,c,(blank),e,f,g]
-> shift elements 4,5,6 back one index
-> array is [a,b,c,e,f,g]
-> decrement length


/*
  ArrayList
  
  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):
  
  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    const ans = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return ans;
  }
  get(index) {
    return this.data[index];
  }
  delete(index) {
    const ans = this.data[index];
    this._collapseTo(index);
    return ans;
  }
  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
  serialize() {
    return this.data;
  }
}


// unit tests
// do not modify the below code
describe('ArrayList', function() {
  const range = length => Array.apply(null, {length: length}).map(Number.call, Number);
  const abcRange = length => range(length).map( num => String.fromCharCode( 97 + num ) );
  let list;
  
  beforeEach( () => {
    list = new ArrayList();
  })
  
  it('constructor', () => {
    expect(list).toEqual(jasmine.any(ArrayList));
  });
  
  it('push', () => {
    abcRange(26).map( character => list.push(character) );
    expect(list.length).toEqual(26);
  });
  
  it('pop', () => {
    abcRange(13).map( character => list.push(character) );
    expect(list.length).toEqual(13);
    range(10).map( () => list.pop() );
    expect(list.length).toEqual(3);
    expect(list.pop()).toEqual('c');
  });
  
  it('get', () => {
    list.push('first');
    expect(list.get(0)).toEqual('first');
    list.push('second');
    expect(list.get(1)).toEqual('second');
    expect(list.get(0)).toEqual('first');
    abcRange(26).map( character => list.push(character));
    expect(list.get(27)).toEqual('z');
    expect(list.get(0)).toEqual('first');
    expect(list.get(9)).toEqual('h');
    list.pop();
    expect(list.get(list.length-1)).toEqual('y');
  });
  
  it('delete', () => {
    abcRange(26).map( character => list.push(character) );
    list.delete(13);
    expect(list.length).toEqual(25);
    expect(list.get(12)).toEqual('m');
    expect(list.get(13)).toEqual('o');
    list.delete(0);
    expect(list.length).toEqual(24);
    expect(list.get(0)).toEqual('b');
  });
  
});
