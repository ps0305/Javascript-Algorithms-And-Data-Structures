Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
Update the current existing inventory item quantities (in `arr1`).
If an item cannot be found, add the new item and quantity into the inventory array.
The returned inventory array should be in alphabetical order by item.

```js
function updateInventory(arr1, arr2) {
    // Variable for location of product
    let index;
    // A helper method to return the index of a specified product (undefined if not found)
    var getProductIndex = function (name) {
        for (let i = 0; i < this.length; i++) {
            if (this[i][1] === name) {
                return i;
            }
        }
        return undefined;
    }
    // For each item of the new Inventory
    for (let i = 0; i < arr2.length; i++) {
        // Invoke our helper function using arr1 as this
        index = getProductIndex.call(arr1, arr2[i][1]);
        // If the item doesn't exist
        if (index === undefined) {
            // Push the entire item
            arr1.push(arr2[i]);
        } else {
            // Add the new quantity of the current item
            arr1[index][0] += arr2[i][0];
        }
    }
    // Sort alphabetically, by the product name of each item
    arr1.sort((a,b) => {
        if(a[1] > b[1]) return 1;
        if(a[1] < b[1]) return -1;
        return 0
    })
    return arr1;
}
// test here
// Example inventory lists
let curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];
let newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
