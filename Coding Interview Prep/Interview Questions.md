
* [faang-frontend-preparation-plan](https://makushev.com/2020/12/14/faang-frontend-preparation-plan/)

* Some of the best resources to learn and advance in javascript...

   1. Javascript - Basics - https://lnkd.in/dNJPGhdE

   2. Javascript and DOM - Intermediate - https://javascript.info/

   3. Javascript - Advanced - https://lnkd.in/dhbihk7t

   4. Critical rendering path - Advanced - https://lnkd.in/gAiQ93yx

   5. Javascript - Advanced - https://lnkd.in/gpkCuZcA

   6. Machine coding - Advanced - https://shorturl.at/iovAU

   7. Browser Rendering- Advanced - https://lnkd.in/gSHQxgvQ


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
* Binary Serialization and Deserialization
* Rendering Performance Optimization
* Datagram Transport Layer Security
* Development Server Configuration
* CSS Transforms and Animations
* Image Lazy Loading Strategies
* Rollup.js for Library Bundling
* Client-Side Data Encryption
* Image Sprite and Icon Fonts
* Module Bundlers Overview
* Real-Time Communication
* Browser Cookies Security
* Browser Storage Quotas
* ArrayBuffer Operations
* 2D Context in Canvas
* Audio/Video Codecs
* Web SQL Database
* Image Capture API
* Web Audio API
* HTTP/3
* Canvas Animation
* Server-Sent Events
* Resource Timing API
* Long-Tasks Detection
* Byte Streams Handling
* Content Security Policy
* Scalable Vector Graphics
* Dynamic HTML Rendering
* Image Format Comparison
* DocumentFragment Usage
* Bit Manipulation Techniques
* Shadow DOM Encapsulation
* Secure File Upload Practices
* Component-Based Architecture
* Asynchronous Storage Operations
* Service Worker Caching Strategies
* Critical Rendering Path Optimization
* Cross-Site Request Forgery Protection
* Differential Loading for Modern Browsers


## 12 Resources to crack your next Machine Coding Round for any Frontend-developer job: 

1. Poll - https://lnkd.in/gWEwX8fS

2. Accordion - https://lnkd.in/gbEmEg2G

3. Intersection Observer - https://lnkd.in/gkvWaZC4

4. Tabs - https://lnkd.in/grACKGE8

5. Debounce - https://lnkd.in/giwjJhZD

6. Tic Tac Toe - https://lnkd.in/gxWwGQBN

7. Date Picker - https://lnkd.in/gBNpfp7P

8. Popup - https://lnkd.in/g3fa7bAK

9. Connect 4 - https://lnkd.in/gHWa5t-U

10. Quiz App - https://lnkd.in/gNKAX_FY

11. Calendar - https://lnkd.in/gV-APsMB

12. EventEmitter - https://lnkd.in/gRQndkZU

13. Image Carousel - https://lnkd.in/gwGxRkMW

14. Search Bar - https://lnkd.in/g2GraQFf

15. Card Slider - https://lnkd.in/gxZj2u2t

## UI challenges to excel in any machine coding round. 🔥

* Implement Star Rating functionality
* Design a Pop Over component
* Create an Accordion UI component
* Design a Carousel for displaying images
* Build a grid using HTML/CSS and JavaScript with search, sort, and event bubbling (Amazon onsite)
* Design a responsive NavBar
* Implement Infinite Scroll feature
* Develop Typeahead/Autocomplete functionality using a trie data structure
* Implement a Debounce function
* Build a Tic Tac Toe game
* Create a Snake and Ladder board game
* Make a Calendar of any month like a Date Picker
* Implement a throttle function
* Create custom Higher Order Functions like Map, Reduce, Filter, and Sort
* Design an analog clock
* Build a Todo List application
* Implement functionality to change all text on a page to different translations
* Develop a Giphy image search and display feature (using the Giphy API) in a responsive format
* Build a Connect Four game
* Implement Nested Checkboxes where parent and children checkboxes are synchronized
* Create a poll widget
* Implement an Event Emitter
* Implement the Promise.all function
* Flatten a nested JavaScript array without using Array.prototype.flat()
* Implement a custom Sort() function

* To find the **longest substring without repeating characters**, you can use a **sliding window** approach with two pointers (left and right) to track the current window, and a hash map to store the index of the characters.

Here is the solution in JavaScript:

```javascript
function lengthOfLongestSubstring(s) {
  let seen = new Map();  // Hash map to store the last index of each character
  let maxLength = 0;
  let left = 0;          // Left pointer for the sliding window
  
  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    
    // If the character is already in the map and its index is greater than or equal to left, update left
    if (seen.has(currentChar) && seen.get(currentChar) >= left) {
      left = seen.get(currentChar) + 1;
    }
    
    // Update or add the current character's index in the map
    seen.set(currentChar, right);
    
    // Calculate the maximum length of substring so far
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}
```

### Example Usage:

```javascript
console.log(lengthOfLongestSubstring("abcabcbb"));  // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));     // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));    // Output: 3 ("wke")
console.log(lengthOfLongestSubstring(""));          // Output: 0
```

### Explanation:
1. **Sliding Window**: 
   - Use two pointers (`left` and `right`) to maintain the current window of characters.
   - As you move `right` through the string, check if the current character is already in the map and its last index is within the window (i.e., greater than or equal to `left`).
   
2. **Updating Window**:
   - If a repeating character is found, move the `left` pointer just after the previous occurrence of that character.
   - Store or update the index of each character in the hash map (`seen`).

3. **Calculate Length**:
   - For each new character, update the maximum length of the substring if the current window is longer.

### Time Complexity:
- **O(n)** where `n` is the length of the string. Each character is processed at most twice (once when the right pointer moves and once when the left pointer moves).
