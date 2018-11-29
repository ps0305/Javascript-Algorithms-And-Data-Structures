// 1. With the for loop

function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = '';
  var longestWordLength = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWordLength){
      longestWordLength = strSplit[i].length;
	    longestWord = strSplit[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));




//2. With reduce method

function findLongestWord(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord;
}



//3. With sort method

function findLongestWord(str) {
  var longestWord = str.split(' ').sort((a, b)=> return b.length - a.length; 
  return longestWord[0];
}



