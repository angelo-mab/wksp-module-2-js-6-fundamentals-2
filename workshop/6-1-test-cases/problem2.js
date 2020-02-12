let verifyEquals = require("../../assets/verify-equals");

// Problem 2
// ---------
// Step 1
// Write a function that returns the last character of the string that is passed to it.
// If the string does not have a first character, return undefined.

function f(str) {
  if (str.charAt(str.length - 1) === "") return undefined;
  else return str.charAt(str.length - 1);
}

// Step 2
// We need 5 test cases. The first input is provided.
// Don't forget to test all of the question parameters

let inputs = ["max", "x", "null", 'undefined', "NaN", 'hello'];
let outputs = ["x", "x", 'l', 'd', "N", 'o'];

// Step 3
// Run this file in the debugger.
// If you get the "All test passed for..." message, move on to the next exercise.

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
