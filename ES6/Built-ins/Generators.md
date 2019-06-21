Whenever a function is invoked, the JavaScript engine starts at the top of the function and runs every line of code until it gets to the bottom. There's no way to stop the execution of the function in the middle and pick up again at some later point. This **"run-to-completion"** is the way it's always been:
```js
function getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
    }

    console.log('the function has ended');
}

getEmployee();
```

Running the code above produces the following output on the console:

```html
the function has started
Amanda
Diego
Farrin
James
Kagure
Kavita
Orit
Richard
the function has ended
```
But what if you want to print out the first 3 employee names then stop for a bit, then, at some later point, you want to continue where you left off and print out more employee names. With a regular function, you can't do this since there's no way to "pause" a function in the middle of its execution.

### Pausable Functions

if we _ do _ want to be able to pause a function mid-execution, then we'll need a new type of function available to us in ES6 - generator functions! Let's look at one:
```js
function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log( name );
    }

    console.log('the function has ended');
}
```
Notice the asterisk (i.e. *) right after the `function` keyword? That asterisk indicates that this function is actually a generator!

Now check out what happens when we try running this function:
```js
getEmployee();
```
> // this is the response I get in Chrome:
> getEmployee {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: Window}

## Generators & Iterators

When a generator is invoked, it doesn't actually run any of the code inside the function. Instead, it creates and returns an iterator. This iterator can then be used to execute the actual generator's inner code.

```js
const generatorIterator = getEmployee();
generatorIterator.next();
```
```html
the function has started
Amanda
Diego
Farrin
James
Kagure
Kavita
Orit
Richard
the function has ended
```
Now if you tried the code out for yourself, the first time the iterator's `.next()` method was called it ran all of the code inside the generator. Did you notice anything? The code never paused! So how do we get this magical, pausing functionality?

## The Yield Keyword

```js
function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
        yield;
    }

    console.log('the function has ended');
}
```
Notice that there's now a `yield` inside the `for...of` loop. If we invoke the generator (which produces an iterator) and then call `.next()`, we'll get the following output:
```js
const generatorIterator = getEmployee();
generatorIterator.next();
```
### Logs the following to the console:

```
the function has started
Amanda
```
It's paused! But to really be sure, let's check out the next iteration:
```js
generatorIterator.next();
```
### Logs the following to the console:
> Diego

So it remembered exactly where we left off! It took the next item in the array (Diego), logged it, and then hit the `yield` again, so it paused again.

Now pausing is all well and good, but what if we could send data from the generator back to the "outside" world? We can do this with `yield`.
