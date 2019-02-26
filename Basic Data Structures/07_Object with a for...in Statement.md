Sometimes you may need to `iterate` through all the `keys` within an `object`. 
This requires a specific syntax in JavaScript called a `for...in` statement. For our users object, this could look like:
```js
for (let user in users) {
  console.log(user);
};

// logs:
Alan
Jeff
Sarah
Ryan

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line
  let online = 0;
  for(let user in users) {
    if(obj[user].online == true) {
      online += 1;
    }
    return online;
  }
  let online = 0;
  for(let user in obj){
    if(obj[user].online == true) {
      online += 1;
    }
  }
  return online;
  // change code above this line
}

console.log(countOnline(users));
