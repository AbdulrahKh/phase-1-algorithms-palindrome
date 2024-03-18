function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}
/* 
  Add your pseudocode here
  make a variable  called "reversedWord" that holdes the reversed value of the input
  check if the input and the "reversedWord" are equal, if yes then return true, if not return false
*/

/*
  Add written explanation of your solution here
  the function isPalindrome takes one argument "word", inside of the function
  it splits "word" into an array of it's characters and reverse it's order
  and then rejoin them back together to make a new string of the reversed value of "word"
  which is named  as "reversedWord". After that it checks if "word" is equal to "reversedWord"
  if they are equal it returns true, if not it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));
}

module.exports = isPalindrome;
