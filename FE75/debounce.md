Implement a debounce function which accepts a callback function and a wait duration. Calling debounce() returns a function which has debounced invocations of the callback function

```js
function debounce(func: (...args: any[]) => void, wait: number): (...args: any[]) => void {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    return function (...args: any[]) {
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

// Example usage:
const debouncedFunction = debounce(() => {
    console.log('Function executed!');
}, 1000);

// Calling the debounced function multiple times within 1 second will only execute the callback once.
debouncedFunction();
debouncedFunction();
debouncedFunction();
```
