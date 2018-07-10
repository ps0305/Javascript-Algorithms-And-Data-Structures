/*JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.*/


//Basic Code Solution:

var convertToRoman = function(num) {

  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}

// test here
convertToRoman(36);
/*
Code Explanation:

==> We start off by creating two arrays with default conversion with matching indices. 
    These are called decimalValue and romanNumeral. 
    We also create an empty string variable, romanized, which will house the final roman number.

==> Using a for loop, we loop through the indicies of the decimalValue array. 
    We continue to loop until while the value at the current index will fit into num.

==> Next, we add the roman numeral and decrease num by the decimal equivalent.
==> Finally, we return the value of romanized.*/


//Intermediate Code Solution:

function convertToRoman(num) {
 var romans = ["I", "V", "X", "L", "C", "D", "M"],
     ints = [],
     romanNumber = [],
     numeral = "";
  while (num) {
    ints.push(num % 10);
    num = Math.floor(num/10);
  }
  for (i=0; i<ints.length; i++){
      units(ints[i]);
  }
  function units(){
    numeral = romans[i*2];
    switch(ints[i]) {
      case 1:
        romanNumber.push(numeral);
        break;
      case 2:
        romanNumber.push(numeral.concat(numeral));
        break;
      case 3:
        romanNumber.push(numeral.concat(numeral).concat(numeral));
        break;
      case 4:
        romanNumber.push(numeral.concat(romans[(i*2)+1]));
        break;
      case 5:
        romanNumber.push(romans[(i*2)+1]);
        break;
      case 6:
        romanNumber.push(romans[(i*2)+1].concat(numeral));
        break;
      case 7:
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral));
        break;
      case 8:
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral).concat(numeral));
        break;
      case 9:
        romanNumber.push(romans[i*2].concat(romans[(i*2)+2]));
      }
    }
  return romanNumber.reverse().join("").toString();
}

// test here
convertToRoman(97);

/*Code Explanation:
=>Create an array of Roman Numerals (romans).
=>Use a for loop to create an array of the digits (ints) in the number.
=>Loop through the array of digits (base 10) and as you do, increment the Roman Numeral (base 5) index by 2 (numeral = romans[i*2]).
=>Within the loop, use Switch Case to push the proper Roman Numerals (backwards) onto that array.
=>Reverse the Roman Numerals array and turn it into a string.*/