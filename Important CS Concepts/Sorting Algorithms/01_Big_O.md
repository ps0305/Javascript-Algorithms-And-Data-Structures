Big O is the way we analyze how efficient algorithms (or code in this case) without getting too mired in the details. We can model how much time any function is going to take given n inputs, but in reality we're interested in the order of magnitude of the number and necessarily of the exact figure.

> Example: I don't particularly care if a function takes 300 milliseconds versus 330 milliseconds given 1,000 inputs, but I do care if it takes 300 milliseconds versus 30 seconds. This would be a difference in an order of magnitude, or basically we're saying we only care if the difference is pretty large.

Enter Big O. Think of the O as a vacuum that sucks in all the unimportant information and just leaves you with the important stuff. Let's look at a purely mathematical perspective for a second. Say we have the equation 3x² + x + 1. If we plug in 5, the first term will be 75, the second term will be 5, and the third will be 1. In other words, most of the piece of the pie comes from the first term, to the point we can just ignore the other terms. If we plug in huge numbers, it becomes even more apparent. IE if we do 5,000,000, the first term is 75,000,000,000,000, the second is 5,000,000, and the last 1. A huge gap.

Hence this is what Big O does; we ignore the little parts and concentrate on the big parts. Keeping with 3x² + x + 1, the Big O for this equation would be O(n²) where O is just absorbing all the other fluff (including the factor on the biggest term.) Just grab the biggest term. So for n terms, it's going take us n*n time to go through our inputs. So let's see how to derive this from an algorithm.

```js
function crossAdd(input) {
    var answer = [];
    for (var i = 0; i < input.length; i++) {
        var goingUp = input[i];
        var goingDown = input[input.length-1-i];
        answer.push(goingUp + goingDown);
    }
    return answer;
}
```
                    
This is O(n) because we go through all the inputs once in a loop.

```js
function find(needle, haystack) {
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) return true;
    }
}
```                    
Still O(n). Unless we say otherwise, we're assuming worst case scenario. In this worst case, the needle would be the last element.

```js
function makeTuples(input) {
    var answer = [];
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input.length; j++) {
            answer.push([input[i], input[j]]);
        }
    }
    return answer;
}
```
                    
This would be **O(n²)** . For every input, we have to go through a full loop inside of another full loop, meaning we're doing a lot of work! This is the trick: look for loops. A loop inside of a loop inside of a loop would likewise be **O(n³)**.

If we have no loops and just do something and exit/return, then it's said we're doing it in constant time, or O(1).

We'll get more into it later, but you can also have O(log n) if a code employs a divide-and-conquer strategy (often recursive,) meaning as you add more terms, the increases in time as you add input diminishes. We'll talk more about that with merge and quick sort.
