# README

## Algorithm

First, use `findBraces` function to find the mapping positions of corresponding braces.

```js
'a{b,c}';

const braces = {
  1: 5,
};
```

Then, iterate over string within range of `start` and `end`.

If `{` is met,
call `braceExpansionII` to find words in the range of `i` and `braces[i]`. Then take Cartesian product of top element in the stack and this. And push result to the stack.

If `,` is met, it means next character is the beginning of next word. So we push `['']` to the stack.

Finally, any charater is met, take Cartesian product of top element in the stack and this charater. And push result to the stack.

After string iteration, we have an array of words. Then take union of these words and sort it.
