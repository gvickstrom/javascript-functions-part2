//Define a function called oldestPerson that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.

  var people = {
  'George' : 26,
  'Mark' : 56,
  'Sally' : 80
};
  function oldestPerson(x) {
    var vals = [];
    for(var i in x) {
      vals.push(x[i]);
    }
    var max = Math.max.apply(null, vals);

      for(var i in x) {
        if(x[i] === max) {
          return i;
        }
      }
    }
console.log(oldestPerson(people));

// Define a function called longestWord that takes a string and returns the longest word in the string.

function LongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = strSplit[0];
  for(var i = 1; i < strSplit.length; i++) {
    if(strSplit[i].length > longestWord.length) {
    longestWord = strSplit[i];
  }
}
return longestWord;
}
console.log(LongestWord('Hey guys what is going on'));
//
// // Refactor the longestWord function so that it ignores punctuation.
//
function LongestWord(str) {
  var rmv = str.replace(/[^A-Za-z0-9\s]/g,"").replace(/\s{2,}/g, " ");
  var strSplit = rmv.split(' ');
  var longestWord = strSplit[0];
  for(var i = 1; i < strSplit.length; i++) {
    if(strSplit[i].length > longestWord.length) {
    longestWord = strSplit[i];
  }
}
return longestWord;
}
console.log(LongestWord('Hello! Do you like coffee? Or bananas?'));

// Define a function called factorial that takes a random number as an argument and then returns the factorial of that given number.

function factorial(randNum) {
  var fact = 1;
  while (randNum > 0) {
    fact = fact*randNum;
    randNum --;
  }
  return fact;
}
console.log(factorial(5));

// Bonus: Write a function called palindrome that takes a string as an argument. Return true if the string is a palindrome, otherwise return false.

function palindrome(str) {
  var rmv = /[\W_]/g;
  var lowCaseStr = str.toLowerCase().replace(rmv, '');
  var reverseStr = lowCaseStr.split('').reverse().join('');
  return reverseStr === lowCaseStr;
}
  console.log(palindrome("Racecar"));
