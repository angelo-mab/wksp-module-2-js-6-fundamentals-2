let verifyEquals = require("../../assets/verify-equals");

// Problem 5
// ---------
// Step 1
// Write a function that accepts an array of two values and returns those two numbers.
// - The input of the function is an array.
// - If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.

function f(input) {
  // if the length of the input is not 2, or the first or second variable in array are not numbers, return the result as undefined
  if (
    input.length !== 2 ||
    typeof input[0] !== "number" ||
    typeof input[1] !== "number"
  )
    return undefined;
  return input[0] * input[1];
}

// Step 2
// We need 5 test cases. The first input is provided.
// Don't forget to test all of the question parameters

let inputs = [
  [2, 7],
  [4, 6],
  [12, 6],
  [1, 0],
  [51, 1]
];
let outputs = [14, 24, 72, 0, 51];

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
