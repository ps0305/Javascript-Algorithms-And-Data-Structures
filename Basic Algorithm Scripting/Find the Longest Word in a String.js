/*Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/

function findLongestWordLength(str) {
  var wordOne = str.split(' ');
  var maxLength = 0;
  for(var i=0;i<wordOne.length;i++){
    if(wordOne[i].length>maxLength){
      maxLength = wordOne[i].length;
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");