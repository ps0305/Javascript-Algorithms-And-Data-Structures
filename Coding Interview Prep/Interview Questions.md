* Tell me some of the APIs introduced in HTML5.
* Ways to store data on the client-side i.e. inside browsers.
* Session Storage vs Local Storage.
* CSS combinators. Child vs Descendant Selectors.
* What is `hoisting` in JavaScript?
* How `let` and `const` have affected the concept of hoisting.

* `Closures` in JavaScript. What are closures and their use cases?
* `Shallow` copy vs `Deep` Copy.
* How to prevent an object from `mutation`. ( Basically freezing an object)
* Why have you used `useCallback` in your code?
* What optimisations does React do?
* What is `Synthetic event`? Why not native events?
* How does Redux data flow work?
* Have you used any middleware in Redux?
* Have you used redux-saga ?
* What are `generators` in JavaScript?
* You have used async-await not promises why? Can you convert them to promises?
* Have you ever used React-Router ?
* What is Node.JS?
* What is a REST API? What are different HTTP methods?
* Do you know anything about job scheduling?
* What Node frameworks and databases ( Relational, Non-relational ) you have worked with?
* ACID Properties in Database Management.
* Any knowledge of AWS services? I talked about s3 and the process of uploading images
* Explain Null vs Undefined in JavaScript.
* Explain `this` and how its values can be changed at runtime.
* call , apply , and bind.
* for...of loop vs for...in the loop.
* What is `virtual DOM`?
* What are the hooks you have used? Explain useCallback vs useMemo with use cases.
* LifeCycle methods and how to kind of control the lifecycle of functional components?
* useEffect v/s useLayoutEffect.
* Promise methods. Promise.all() vs Promise.any() vs Promise.allSettled() .
* Write poly-fill of Promis.all().(Coding Problem)
* Authentication and JWT. Refresh Tokens vs Access Tokens.
* CORS policy.
* UseEffect and `reconciliation` in React.
* useCallback, useMemo and React.memo().
* useRef and its uses.
* state management at a component level and at a global level. Redux vs Context API.
* Benefits of Redux.
* GraphQL vs Rest.
* Client-side vs Server-side rendering.
* tell about some ways to optimise a web application?
* How does the event loop work?
* What about getDerivedStateFromProps and getSnapshotBeforeUpdate methods?
* How to achieve exact behavior like componentDidUpdate in functional components?
* What is debouncing and throttling? Differences between them.

## What is a debounce function?

Debounce function limits the execution of a function call and waits for a certain amount of time before running it again.

```js
const debounceFunc = (func, delay) => {
   let timer;
    return function(...args) {
       const context = this;
       clearTimeOut(timer);
       timer = setTimeOut(() => {
           func.apply(context, args);
       }, delay)
     }}
```
![image](https://user-images.githubusercontent.com/34129569/174491820-d030e948-5f18-4b34-b542-29ac59394d9e.png)

## What is throttle function?

Throttling is a technique, to limit the execution of an event handler function, even when this event triggers continuously due to user actions. (ex: browser resizing)

```js
const throttleFunc = (func, interval) => {
     let shouldFire = true;
   return function() {
         if (shouldFire) {
             func();
             shouldFire = false;
             setTimeOut(() => {
               shouldFire = true;
              }, interval)
            }
       }
  }
```

![image](https://user-images.githubusercontent.com/34129569/174491911-a739956b-d882-486c-95fe-51066bad4a0c.png)

* Code debouncing.
