The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return `[["G", "C"], ["C","G"],["G", "C"]]`

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

#### Problem Explanation
You will get a DNA strand sequence and you need to get the pair and return it as a 2D array of the base pairs. Keep in mind that the provided strand should be first always.

Another way to interpret the problem: there are four potential characters that exist in DNA: “A”, “T”, “G”, and “C”. “A” and “T” are always paired together, and “G” and “C” are always paired together.
This problem presents you with an input, e.g. “ATCGA”. Each of those five characters are missing their pairs.
E.g. the first character “A” needs to be paired with “T” to give the array element [“A”, “T”].
The second character “T” needs to be paired with “A” to give the array element [“T”, “A”].
The number of elements in the final output equals the number of characters in the input.


```js
function pairElement(str) {
  let pairs = {
    A: 'T',
    C: 'G',
    T: 'A',
    G: 'C',
    C: 'G'
  }
  return str.split('').map((element) => {
    return [element, pairs[element]]
  })
}

pairElement("GCG");


console.log(~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~)

function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// test here
pairElement("GCG");
