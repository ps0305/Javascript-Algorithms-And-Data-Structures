
JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter: 
Challenge designed by FreeCodeCamp, solution derived from learning obtained thanks to FreeCodeCamp and with some assistance from other people's solutions on the internet. I'm not willing to take ownership of the below code beyond that I was on the right track. ie. what is inside the while loop was my own solution. 
Function calls provided by FreeCodeCamp as ways to test the algorithm

```js
function convertToRoman(num) {
    //Two array of the same length accounting for roman numerals and decimal values those roman numerals represent. 
    var startingNum = num;
    var decimal = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var roman = "";
    //cycle through the two array's for their entire length
    for (var i = 0; i < decimal.length; i++) {
      //while the array element is less than num...
      while (decimal[i] <= num) {
        //...given the roman variable the romanNumeral value corresponding to the matching decimal value
        roman += romanNumeral[i];
        //decrement num the amount that was already given to the roman variable but in the decimal version
        num -= decimal[i];
      } //check against the while loop condition to see whether the updated num is still greater than decimal, if so, run through the loop until it's less than or equal to. Otherwise move onto the next element in the decimal array which is a small number
    } 
    //log to console to show function call's
    console.log(startingNum + ": " + roman);
    return roman;
}

convertToRoman(2) //should return "II".
convertToRoman(3) //should return "III".
convertToRoman(4) //should return "IV".
convertToRoman(5) //should return "V".
convertToRoman(9) //should return "IX".
convertToRoman(12) //should return "XII".
convertToRoman(16) //should return "XVI".
convertToRoman(29) //should return "XXIX".
convertToRoman(44) //should return "XLIV".
convertToRoman(45) //should return "XLV"
convertToRoman(68) //should return "LXVIII"
convertToRoman(83) //should return "LXXXIII"
convertToRoman(97) //should return "XCVII"
convertToRoman(99) //should return "XCIX"
convertToRoman(400) //should return "CD"
convertToRoman(500) //should return "D"
convertToRoman(501) //should return "DI"
convertToRoman(649) //should return "DCXLIX"
convertToRoman(798) //should return "DCCXCVIII"
convertToRoman(891) //should return "DCCCXCI"
convertToRoman(1000) //should return "M"
convertToRoman(1004) //should return "MIV"
convertToRoman(1006) //should return "MVI"
convertToRoman(1023) //should return "MXXIII"
convertToRoman(2014) //should return "MMXIV"
convertToRoman(3999) //should return "MMMCMXCIX"
