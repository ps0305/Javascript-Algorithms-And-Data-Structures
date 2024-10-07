### Using javascript write Polyfill of deepcopy (Handle Array and object both cases)

```js
if (!Object.deepCopy) {
    Object.deepCopy = function deepCopy(obj) {
        // Check if the value is an object or an array
        if (obj === null || typeof obj !== 'object') {
            return obj; // Return non-object or null value directly
        }

        // If it's an array, create a new array and recursively copy each element
        if (Array.isArray(obj)) {
            let copy = [];
            for (let i = 0; i < obj.length; i++) {
                copy[i] = deepCopy(obj[i]); // Recursively copy elements
            }
            return copy;
        }

        // If it's an object, create a new object and recursively copy each property
        if (obj instanceof Object) {
            let copy = {};
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    copy[key] = deepCopy(obj[key]); // Recursively copy values
                }
            }
            return copy;
        }

        throw new Error('Unable to copy object! Its type isn\'t supported.');
    };
}

// Example usage:
const original = {
    name: "John",
    age: 30,
    details: {
        hobbies: ["reading", "swimming"],
        address: {
            city: "New York",
            zip: "10001"
        }
    }
};

const copied = Object.deepCopy(original);
console.log(copied);
```

#### How it works:
Primitive types: If the value is not an object (or is null), it returns the value directly.
* Arrays: Creates a new array and recursively copies each element.
* Objects: Creates a new object and recursively copies each property.
This ensures that both objects and arrays are deeply copied.
