let verifyEquals = require("../../assets/verify-equals");

// Problem 9
// ---------
// Make this function return the longest word in the input string. If the input string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   f("hey hello morning") returns "morning"

// HINTS:
//    - You'll need to use the split string method
//    - A for loop might be helpful

function f(str) {
  let split = str.split(" ");
  let word = "";
  for (let i = 0; i < split.length; i++) {
    if (word.length <= split[i].length) {
      word = split[i];
    }
  }
  return word;
}

// Test cases
let inputs = [
  "good morning you beautiful creature",
  "why do i have to do this?",
  "we are just being tortured doing these tests",
  "Hey, if you guys are into One Piece, hmu. I love that anime",
  "also, what up"
];
let outputs = ["beautiful", "this?", "tortured", "Piece,", "also,"];

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
  if (i >= inputs.length) throw new Error("You do not have enough test cases");
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log("All tests passed for " + __filename);
