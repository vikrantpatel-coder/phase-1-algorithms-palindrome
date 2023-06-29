function isPalindrome(word) {
  for (i = 0; i < word.length; i++) {
    const j = word.length - 1 - i;
    const startingChar = word[i];
    const endingChar = word[j];

    if (startingChar !== endingChar) return false;
    console.log(startingChar);
    console.log(endingChar);
    return true;
  }
}
let response = isPalindrome("racecar");
console.log(`The word ${response ? "is" : "is not"} a palindrome`);

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
