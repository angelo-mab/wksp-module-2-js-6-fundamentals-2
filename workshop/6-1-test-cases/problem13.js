let verifyEquals = require("../../assets/verify-equals");

// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function f(str) {
    //it splits the string into individual strings then reverses the order, from back to front, then joins together the split string into a string once more
  if (str === str.split("").reverse().join("")) {
    return true;
  } else return false;
}

// Test cases
let inputs = ["palindrome", "abra", "pikachu", "qwewq", "heelloolleeh"];
let outputs = [false, false, false, true, true];

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
