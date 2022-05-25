In JavaScript, a debounce function makes sure that your code is only triggered once per user input. Search box suggestions, text-field auto-saves, and eliminating double-button clicks are all use cases for debounce. 


## Debounce in JavaScript

In JavaScript, the use case is similar. We want to trigger a function, but only once per use case.

Let's say that we want to show suggestions for a search query, but only after a visitor has finished typing it.

Or we want to save changes on a form, but only when the user is not actively working on those changes, as every "save" costs us a database trip. 

```js
function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
function saveInput(){
  console.log('Saving data');
}
const processChange = debounce(() => saveInput());

```

It can be used on an input:

```html
<input type="text" onkeyup="processChange()" />
```

Or a button:
```html
<button onclick="processChange()">Click me</button>
```

Or a window event:

```html
window.addEventListener("scroll", processChange);
```
